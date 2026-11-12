// Technical write-ups. Each one is based on real commits and incidents; keep
// internal hostnames, bucket names, account IDs and costs in dollars out of them.

export type PostBlock =
  | { h: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { code: string; lang?: string };

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO, for <time>
  dateLabel: string;
  readingTime: string;
  tags: string[];
  relatedWork?: string; // featuredWork slug
  body: PostBlock[];
};

export const posts: Post[] = [
  {
    slug: "gdal-s3-list-requests",
    title: "Ten million S3 list requests from one Airflow run",
    summary:
      "A single crop-monitoring run listed an S3 folder about ten million times in one day. The cause was one GDAL default, and the fix was four environment variables set in the right place.",
    date: "2026-09-10",
    dateLabel: "September 2026",
    readingTime: "4 min read",
    tags: ["GDAL", "AWS S3", "Apache Airflow", "Cost"],
    relatedWork: "imagery-pipelines",
    body: [
      { h: "What we saw" },
      {
        p: "One morning the S3 request line on our AWS bill looked wrong. Storage was flat, data transfer was flat, but list requests on the bucket that holds our Planet imagery had jumped. One day accounted for most of the month's S3 request cost.",
      },
      {
        p: "Tracing the requests led to a single source: the Airflow workers running our productivity-zone DAGs. In one day they had issued roughly ten million ListObjects calls.",
      },
      { h: "Why it happened" },
      {
        p: "Those DAGs read Planet GeoTIFFs directly from S3 with rasterio, which uses GDAL's virtual file system:",
      },
      {
        code: 'with rasterio.open("/vsis3/<bucket>/<field>/<date>.tif") as src:\n    ...',
        lang: "python",
      },
      {
        p: "By default, GDAL_DISABLE_READDIR_ON_OPEN is NO. Before GDAL opens a file, it lists the directory it lives in to look for sidecar files such as .ovr overviews, .aux.xml metadata and .msk masks. On a local disk that costs nothing. On S3 every open becomes a LIST request on the prefix.",
      },
      {
        p: "The DAGs open two images per field per date across a three-month window, for every field in a batch. That adds up to millions of opens, and each one was preceded by a list request. Planet delivers plain GeoTIFFs, so there were never any sidecar files to find.",
      },
      { h: "Why we hadn't hit it before" },
      {
        p: "We had already solved this once. Our shared Python package sets the right GDAL options before it reads Sentinel imagery. But that only applies to code that goes through that helper. The Airflow worker pods themselves had no GDAL configuration at all, so any task that called rasterio directly got GDAL's defaults.",
      },
      { h: "The fix" },
      {
        p: "Instead of patching each DAG, I added the settings to the environment secret that every Airflow pod loads. Now every task on the platform gets them, whichever library it uses to read rasters:",
      },
      {
        code: 'GDAL_DISABLE_READDIR_ON_OPEN: "EMPTY_DIR"\nCPL_VSIL_CURL_ALLOWED_EXTENSIONS: ".tif,.tiff,.vrt,.json"\nGDAL_HTTP_MERGE_CONSECUTIVE_RANGES: "YES"\nVSI_CACHE: "TRUE"',
        lang: "yaml",
      },
      {
        ul: [
          "EMPTY_DIR tells GDAL to treat the directory as empty, so it skips the listing.",
          "ALLOWED_EXTENSIONS stops GDAL from probing for sidecar files with HEAD and GET requests.",
          "MERGE_CONSECUTIVE_RANGES combines adjacent byte-range reads into one request when reading windows of a raster.",
          "VSI_CACHE keeps file headers in memory, so repeated reads of the same file don't fetch them again.",
        ],
      },
      {
        p: "I applied the change to the production secret the same day. Workers are autoscaled on queue depth, so they picked up the new environment on their next scale-up without a separate rollout.",
      },
      { h: "What I took from it" },
      {
        ul: [
          "Libraries built for local disks carry defaults that are expensive on object storage. GDAL, HDF5 and anything that walks directories are worth checking.",
          "Set this kind of configuration at the platform level, not in one helper. If it lives in a library, only the code that remembers to call the library is protected.",
          "Watch request metrics, not just storage. A bucket that isn't growing can still cost a lot to read.",
        ],
      },
    ],
  },
  {
    slug: "cognito-migration",
    title: "Moving every Farmdar app to Cognito without a big-bang cutover",
    summary:
      "How we replaced a home-grown JWT login with AWS Cognito across web and mobile apps in phases: dual-mode tokens behind a feature flag, a hosted UI, and a provisioning bug we only found in testing.",
    date: "2026-06-04",
    dateLabel: "June 2026",
    readingTime: "7 min read",
    tags: ["AWS Cognito", "OAuth 2.0", "Go", "Migrations"],
    relatedWork: "go-backend",
    body: [
      { h: "Where we started" },
      {
        p: "Our Go backend issued its own HS256 JWTs and stored them in a cookie. It worked, but every new requirement landed on us: password resets, Google sign-in for staff, mobile apps, a partner API, and one account across products. Some of our users don't have an email address at all and sign in with a phone number.",
      },
      {
        p: "We chose AWS Cognito. The hard part wasn't Cognito itself. It was moving users and apps that were in use every day without a night where everyone gets logged out.",
      },
      { h: "Phase 1: accept both tokens, change nothing" },
      {
        p: "The first release added Cognito next to the old auth instead of replacing it. The middleware looks at the token's header and routes it: HS256 tokens go down the legacy path, RS256 tokens are verified against Cognito's public keys (JWKS), which are cached and refreshed automatically, so there's no network call per request.",
      },
      {
        p: "All of it sat behind a COGNITO_ENABLED flag that defaulted to false. Deploying the code changed nothing. We could ship it, watch it, and turn it on per environment when we were ready.",
      },
      { h: "Phase 2 and 3: logins, refresh and mobile-only users" },
      {
        p: "Next came login and refresh endpoints, still behind the flag. One detail cost us time: Cognito's refresh flow needs a SECRET_HASH computed from the user's Cognito username, and in our pool that is a UUID, not the email address. Using the email works for login and fails for refresh.",
      },
      {
        p: "Then the unified login: it tries Cognito first, by email and then by phone number in E.164 format, and falls back to the legacy login if the user hasn't been migrated yet. Users moved over with an idempotent bulk script: email users get their email as the username, phone-only users get their phone number, and re-running it is safe.",
      },
      {
        p: "On the frontend, an HTTP interceptor refreshes the token on a 401 and retries once. If several requests fail at the same moment, they wait for a single refresh instead of each starting their own.",
      },
      { h: "Phase 4: hosted UI, and removing the old code" },
      {
        p: "Once every app worked with Cognito tokens, we moved the tokens into HttpOnly cookies, added Google sign-in for staff, and switched to Cognito's hosted UI with the authorization-code flow. Then we deleted the legacy login, the HS256 path in the middleware and the feature flag itself. The migration isn't finished until the old path is gone.",
      },
      { h: "The bug we found in testing" },
      {
        p: "Creating users from our admin console was written database-first: insert the user, then sync to Cognito, and treat a sync failure as non-fatal. In our development environment every user created that way was half-made. The backend's IAM role had no Cognito permissions, every call returned AccessDenied, and the code swallowed the error. Admins saw a success message for users who could never sign in.",
      },
      { p: "We rewrote it to create the identity first, with explicit rollback at every step:" },
      {
        ol: [
          "Validate the password against the pool's policy.",
          "Refuse to continue if Cognito isn't configured, instead of quietly skipping it.",
          "Create the Cognito user and set the password. If that fails, delete the Cognito user.",
          "Insert the user and their groups in one database transaction. If that fails, roll it back and delete the Cognito user.",
          "Only after the commit, do the steps that are safe to retry later, like adding the Cognito group.",
        ],
      },
      {
        p: "Every failure now reaches the admin as a real error. The database can never point at an identity that doesn't exist.",
      },
      { h: "Using the token for organisation access, carefully" },
      {
        p: "Our backend decided which organisations a user could access from the database. Cognito tokens also carry the user's groups, and those are signed, so they can't be tampered with. We added a check that compares the two, but in log-only mode first, behind another flag. Mismatches get logged during a soak period before anything is enforced. The database still decides roles within an organisation; the token only proves membership.",
      },
      { h: "What I'd do the same way again" },
      {
        ul: [
          "Separate deploy from release. Every risky step shipped dark behind a flag.",
          "Run old and new side by side, then delete the old path. Dual-mode is a bridge, not a destination.",
          "Log before you enforce. A soak period with mismatch logging is cheap and catches surprises.",
          "Never treat identity errors as non-fatal. A swallowed error in user provisioning becomes a support ticket weeks later.",
        ],
      },
    ],
  },
];
