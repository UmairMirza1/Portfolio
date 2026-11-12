// All site copy lives here. Source of truth: "Portfolio Website Update Brief" (Nov 2026)
// and "Umair Mirza - Resume (one page)". Keep titles, dates and numbers identical to the resume.

export const siteUrl = "https://umairmirza.com";

export const metaData = {
  title: "Umair Mirza - Tech Lead, Backend and Data Platform",
  description:
    "I lead a team of 10+ engineers at Farmdar and build geospatial data platforms on AWS: Airflow pipelines for satellite imagery, a TB-scale geospatial data lake with Apache Iceberg and Trino, and Go services.",
  author: "Umair Mirza",
  siteName: "Umair Mirza",
  ogImage: {
    url: "/images/og.jpg",
    width: 1200,
    height: 630,
    alt: "Umair Mirza - Tech Lead, Backend and Data Platform",
  },
  keywords: [
    "Tech Lead",
    "Backend Engineer",
    "Data Platform",
    "Data Engineer",
    "Geospatial",
    "Apache Airflow",
    "Apache Iceberg",
    "Trino",
    "Go",
    "AWS",
    "Kubernetes",
  ],
};

export const contact = {
  email: "umair3215@gmail.com",
  linkedin: "https://linkedin.com/in/umair-mirza-aa8a21124",
  github: "https://github.com/UmairMirza1",
  calendly: "https://calendly.com/umair3215/",
  timezone: "Remote, UTC+5, overlaps European working hours",
};

export const profileImage = "/images/logos/profile.jpg";

export const headerData = {
  name: "Umair Mirza",
  title: "Tech Lead, Backend and Data Platform",
  company: "Farmdar (Series A agritech)",
  location: "Lahore, Pakistan",
  availability: "Open to remote roles and relocation (Netherlands, Ireland, Germany, Luxembourg)",
  summary:
    "I lead a team of 10+ engineers and build geospatial data platforms on AWS: Airflow pipelines for satellite imagery, a TB-scale geospatial data lake with Apache Iceberg and Trino, and Go services.",
};

export const metrics = [
  { value: "10+", label: "engineers led" },
  { value: "100K+", label: "API requests a day" },
  { value: "TB-scale", label: "geospatial data on S3" },
  { value: "$200K+", label: "YieldPro revenue" },
  { value: "Millions", label: "of acres covered" },
  { value: "62%", label: "lower AWS spend" },
];

export const aboutText = [
  "I'm the tech lead for backend and data platform at Farmdar, a Series A agritech company. I lead a team of 10+ engineers and own the platform end to end, from the Airflow pipelines that process satellite imagery to the TB-scale data lake and the Go backend that serves 100K+ requests a day.",
  "Our products cover millions of acres, and the API is used in production by FFC, Corteva, Engro and Kubota. I enjoy data platforms, geospatial problems and helping a team ship good systems.",
  "I'm open to remote roles and to relocating to the Netherlands, Ireland, Germany or Luxembourg.",
];

export type Role = {
  title: string;
  dates: string;
  bullets: string[];
};

export type Employer = {
  company: string;
  detail: string;
  location: string;
  roles: Role[];
};

export const experience: Employer[] = [
  {
    company: "Farmdar",
    detail: "Series A agritech",
    location: "Lahore, Pakistan",
    roles: [
      {
        title: "Tech Lead, Backend and Data Platform",
        dates: "Feb 2025 - Present",
        bullets: [
          "Lead a team of 10+ engineers; own architecture, code review and delivery across backend, data and infrastructure.",
          "Designed the lakehouse layer of a TB-scale geospatial data lake: Apache Iceberg tables on AWS S3 Tables and Trino as one SQL layer over the lake and the PostGIS production database.",
          "Built OAuth authentication on AWS Cognito, used by every Farmdar application, and consolidated separate services into one Go backend handling 100K+ daily requests, with P95 latency down 40%.",
          "Automated the 3 m Planet imagery pipeline (plant health, stress and productivity-zone maps), cutting delivery from weeks to hours; built 10+ Airflow DAGs and a custom Airflow-Kubernetes operator, cutting manual work by 70%.",
          "Own infrastructure as code with Terraform, Helm and GitHub Actions, cutting deployment time by 60%; led a cost review that cut AWS spend by 62%. Launched a production API adopted by FFC, Corteva, Engro and Kubota, and built a crop water requirement tool for the FAO.",
        ],
      },
      {
        title: "Software Engineer II",
        dates: "Jan 2024 - Jan 2025",
        bullets: [
          "Led development of YieldPro, a crop-monitoring platform built from scratch, generating $200K+ in revenue and serving 50K+ farmers.",
          "Automated satellite image analysis with Apache Airflow, improving data throughput 3x.",
          "Introduced role-based access control (RBAC) and built a PostGIS tile server for vector and raster tiles.",
          "Delivered an Angular geospatial app for real-time map analytics, cutting user task completion time by 50%.",
        ],
      },
      {
        title: "Software Engineer",
        dates: "Mar 2023 - Dec 2023",
        bullets: [
          "Designed MongoDB schemas for geospatial and agronomic datasets and built an internal React console for managing map layers.",
          "Refactored a legacy React/Redux and Kepler codebase and supported its migration to Mapbox GL JS.",
        ],
      },
    ],
  },
  {
    company: "Tectiers GmbH",
    detail: "Fintech, part-time remote contract",
    location: "Vienna, Austria",
    roles: [
      {
        title: "Software Engineer",
        dates: "Oct 2022 - Sep 2023",
        bullets: [
          "Built Apache Airflow pipelines for BMW's enterprise reporting platform, automating data extraction and weekly database restores across environments.",
          "Built a fintech analytics platform with Angular, Django and PostgreSQL.",
          "Wrote a Python transpiler that converts Excel/VBA logic into native Excel functions with 95% functional parity.",
        ],
      },
    ],
  },
  {
    company: "FAST-NUCES",
    detail: "University",
    location: "Lahore, Pakistan",
    roles: [
      {
        title: "Teaching Assistant",
        dates: "Feb 2022 - May 2023",
        bullets: [
          "Mentored 100+ students in Android (Kotlin) and distributed computing (MPI, OpenMP).",
        ],
      },
    ],
  },
];

export type CaseStudy = {
  context: string[];
  architecture?: string[];
  decisions: { title: string; body: string }[];
  challenges?: string[];
  role: string[];
};

export type FeaturedWork = {
  slug: string;
  title: string;
  highlight: string;
  built: string;
  stack: string[];
  result: string;
  status?: string;
  // PLACEHOLDER: set `image` once Farmdar approves a public screenshot.
  image?: { src: string; alt: string };
  // Filled from the repo research; a card links to /work/<slug> only when this is set.
  caseStudy?: CaseStudy;
};

export const featuredWork: FeaturedWork[] = [
  {
    slug: "data-lake",
    title: "Geospatial data lake and query layer",
    highlight: "One SQL layer, TB-scale data",
    built:
      "An Apache Iceberg lakehouse on AWS S3 Tables with Trino as a single SQL layer over the lake and the PostGIS production database, signed in through Cognito.",
    stack: ["S3 Tables", "Apache Iceberg", "Trino", "PostGIS", "PyIceberg", "Terraform"],
    result: "Analysts and ML engineers query lake tables and live production data from one place, with access controlled by Cognito groups.",
    image: {
      src: "/images/projects/data-platform.svg",
      alt: "Data platform architecture: satellite imagery and field surveys flow through Airflow on EKS into S3, Iceberg tables on S3 Tables and PostGIS; Trino queries the lake and PostGIS; a Go backend secured with Cognito serves Farmdar apps and the partner API.",
    },
    caseStudy: {
      context: [
        "Farmdar's data lives in three places: TB-scale satellite imagery and rasters in S3, a PostGIS database behind every product, and the outputs of analysis notebooks. Before the lakehouse, getting a joined view meant exporting from one and loading into another.",
        "The goal was one SQL entry point that data scientists, analysts and dashboards could use, without copying the production database around or handing out database credentials.",
      ],
      architecture: [
        "Trino runs on EKS and exposes two kinds of catalog. Apache Iceberg tables live in AWS S3 Tables, with one table bucket per environment and a namespace per product. The PostGIS production database is attached through Trino's PostgreSQL connector, so it is queried live, not replicated.",
        "Sign-in to Trino goes through AWS Cognito. Cognito groups map to catalog and schema permissions, so access is managed in the same place as access to every other Farmdar application. Superset and JupyterHub sit on top.",
        "Pipelines write to the lake through a small Python library in our shared package. It creates partitioned tables through Trino and appends or overwrites data through PyIceberg, with geometries stored as WKB.",
      ],
      decisions: [
        {
          title: "Managed catalog over a self-hosted one",
          body: "We first ran Apache Nessie as the Iceberg catalog. Moving to the S3 Tables Iceberg REST endpoint removed a service we had to run ourselves, and S3 Tables handles table maintenance such as compaction.",
        },
        {
          title: "Federate the production database, don't copy it",
          body: "PostGIS stays the source of truth for fields, subscriptions and results. Trino reads it live through a connector, so there is no sync job to break and no second copy to go stale.",
        },
        {
          title: "One library for writing to the lake",
          body: "Notebooks and DAGs call a single create, append and overwrite API instead of talking to the catalog directly. Partitioning and geometry encoding are decided once, in code review, not in every notebook.",
        },
        {
          title: "Short-lived credentials",
          body: "Trino reaches S3 Tables through IAM roles for service accounts, not long-lived access keys.",
        },
      ],
      role: [
        "I designed the lakehouse and led the platform team that built it: S3 Tables and networking in Terraform, Cognito sign-in for Trino, IAM for service accounts, and the shared Python library that pipelines use to write to the lake.",
        "The lakehouse is the newest layer of the platform, and yield estimation is the first production pipeline writing to it.",
      ],
    },
  },
  {
    slug: "imagery-pipelines",
    title: "Satellite imagery pipelines",
    highlight: "Weeks to hours",
    built:
      "Production Airflow on Kubernetes for satellite imagery: Planet 3 m ingestion delivered straight to S3, an operator that runs each Jupyter notebook in its own pod, and the reporting pipelines on top.",
    stack: ["Apache Airflow", "Kubernetes", "Papermill", "Planet API", "GDAL", "Python"],
    result: "Throughput up 3x, manual work down 70%, Planet imagery delivery from weeks to hours, and AWS spend down 62%.",
    image: {
      src: "/images/projects/imagery-pipelines.svg",
      alt: "Satellite imagery pipeline: Planet subscriptions deliver to S3; Airflow on EKS routes tasks to low, medium, high-memory and GPU queues; a notebook operator runs each step in its own pod with Papermill; batches of fields go from shortlist to PDF reports.",
    },
    caseStudy: {
      context: [
        "Farmdar sells crop-health maps and reports built from satellite imagery. The analysis was written by data scientists in Jupyter notebooks and run by hand, so every new customer area meant more manual runs and slower delivery.",
        "The workloads are mixed: light API calls, memory-heavy raster processing and GPU model inference. They need to run on the right machines without paying for idle ones.",
      ],
      architecture: [
        "Airflow runs on EKS with Celery workers split into queues by resource profile: low, medium, high-memory and GPU. Workers scale on queue depth, and spot nodes are added on demand.",
        "Notebook steps run through a custom operator built on KubernetesPodOperator. Each task gets its own pod that pulls the shared library at start-up and executes the notebook with Papermill, with parameters passed in from the DAG.",
        "For Planet, a DAG creates subscriptions for 3 m, 8-band surface-reflectance imagery that Planet delivers directly to S3. The main pipeline then maps over batches of fields: shortlist, download, plant health and nitrogen maps, database load, scouting points and PDF reports.",
      ],
      decisions: [
        {
          title: "Run notebooks as tasks instead of rewriting them",
          body: "Data scientists keep working in notebooks, and the platform turns them into scheduled, retryable, isolated tasks. A new analysis goes to production as a notebook plus a few lines of DAG code.",
        },
        {
          title: "Let Planet push to S3",
          body: "Subscriptions with S3 delivery replaced searching and downloading scenes ourselves. New imagery arrives without a polling job, and the pipeline starts from files that are already in our bucket.",
        },
        {
          title: "Split GPU and CPU stages",
          body: "For field delineation, I split the work into two DAGs that hand off through S3, so a GPU node is not held for hours of CPU-bound post-processing.",
        },
        {
          title: "Right-size before scaling",
          body: "I reduced worker memory requests to what tasks actually used and moved GPU node pools to spot instances, as part of a cost review that cut monthly AWS spend by 62%.",
        },
      ],
      challenges: [
        "One plant-health run made millions of S3 list requests in a single day. GDAL was listing the whole directory each time it opened a raster. One GDAL setting (GDAL_DISABLE_READDIR_ON_OPEN) fixed it, and it is now a default in our shared configuration.",
      ],
      role: [
        "I lead the pipeline platform. I designed and built the notebook operator and guided the team through its second version (templating and deferrable mode), built the Planet subscription DAG and ingest stage, parallelised batch processing, and led the cost review and right-sizing.",
      ],
    },
  },
  {
    slug: "yieldpro",
    title: "YieldPro",
    highlight: "$200K+ revenue",
    built:
      "A crop-monitoring platform built from scratch: field subscriptions in PostGIS, Airflow pipelines that produce per-field crop-health reports, vector tiles served from the database, and an Angular map interface.",
    stack: ["Go", "PostGIS", "Apache Airflow", "Angular", "Mapbox GL", "AWS"],
    result: "$200K+ in revenue and 50K+ farmers served.",
    image: {
      src: "/images/projects/yieldpro.svg",
      alt: "YieldPro architecture: imagery feeds Airflow pipelines that write field results to PostGIS; a Go API applies organisation-scoped access control; vector tiles from ST_AsMVT and raster tiles feed an Angular and Mapbox GL web app.",
    },
    caseStudy: {
      context: [
        "Agribusinesses and their growers need to know which fields need attention without visiting every one. YieldPro turns satellite imagery into crop-health maps and regular reports for each subscribed field.",
      ],
      architecture: [
        "Fields and subscriptions live in PostGIS. Airflow pipelines compute indices and stress maps for each field, load results into the database and render PDF reports.",
        "The Go API serves the data and the map. Vector tiles are generated on request in PostGIS (ST_AsMVT) and filtered by the user's organisation, and raster layers come from a tile server. The web app is Angular with Mapbox GL.",
      ],
      decisions: [
        {
          title: "Generate vector tiles in the database",
          body: "Building tiles in PostGIS on request means the map always shows current data and every tile is filtered by organisation. There is no pre-built tile set to rebuild or to leak between customers.",
        },
        {
          title: "Access control by product and organisation",
          body: "I introduced role-based access control: users belong to groups within an organisation, and groups grant access to products. The same model now covers every Farmdar product.",
        },
        {
          title: "Reports from the same pipeline as the map",
          body: "PDF reports are rendered from the pipeline's own outputs, so what a grower reads matches what they see on the map.",
        },
      ],
      role: [
        "I led YieldPro's development as Software Engineer II. I built the RBAC model, the PostGIS tile server and the Angular map app, which cut user task completion time by 50%.",
      ],
    },
  },
  {
    slug: "go-backend",
    title: "Unified Go backend and Cognito sign-in",
    highlight: "4 backends into 1",
    built:
      "Merged four product backends into one Go service and moved every application to AWS Cognito sign-in, with a scoped partner API at the edge.",
    stack: ["Go", "AWS Cognito", "OAuth 2.0", "PostGIS", "API Gateway", "Kubernetes"],
    result: "100K+ daily requests, P95 latency down 40%, and a production API adopted by FFC, Corteva, Engro and Kubota.",
    image: {
      src: "/images/projects/go-backend.svg",
      alt: "Unified backend: Farmdar web and mobile apps sign in through the Cognito hosted UI and reach one Go backend through a load balancer; partners use API Gateway with a Cognito authorizer; one PostGIS database sits behind it.",
    },
    caseStudy: {
      context: [
        "Farmdar grew four products (YieldPro, CropScan, eSurvey and DeveloPro), each with its own backend, database and login. Every cross-product feature meant changes in several places, and users needed separate accounts.",
      ],
      architecture: [
        "One Go binary serves every product as a module under a single API, backed by one PostgreSQL/PostGIS database with an optional read-only pool for heavy queries. It runs on EKS in hardened pods: non-root, read-only file system and images pinned by digest.",
        "Sign-in uses Cognito's hosted UI with the authorization-code flow. Mobile apps use PKCE, and staff sign in with Google Workspace through SAML. The Go service verifies tokens locally against cached signing keys (JWKS), with no network call per request. Behind the load balancer it verifies the load balancer's own signed token.",
        "Partners use a separate entry point: API Gateway with a Cognito authorizer, machine-to-machine clients and read and write scopes, connected privately to the service. Only a few routes are exposed there.",
      ],
      decisions: [
        {
          title: "Unify the data first",
          body: "The first release merged the four products' data into one schema and backend in a single large change, with migration scripts for each product. After that, new features were ordinary modules instead of cross-service projects.",
        },
        {
          title: "Migrate auth behind a feature flag",
          body: "The Cognito rollout ran in three phases. For a while the backend accepted both old and Cognito tokens, using a cheap header check to tell them apart, and Cognito was switched on per environment. Deploying the code changed nothing until the flag was turned on.",
        },
        {
          title: "The database decides who can see what",
          body: "Tokens prove identity. Organisation and group membership come from the database, cached for a few minutes, so access changes take effect without reissuing tokens.",
        },
        {
          title: "Create the identity first, then the user",
          body: "New users are created in Cognito first and then in the database in one transaction. If the database step fails, the Cognito user is deleted, so the database never points to an identity that doesn't exist.",
        },
        {
          title: "Timeouts per handler, not globally",
          body: "Exports and large GeoJSON responses can legitimately take longer than the gateway's 29-second limit. Instead of one global timeout, handlers validate early and set their own limits.",
        },
      ],
      role: [
        "I led the unification release and ran the Cognito migration from design to cutover, including multi-organisation switching, atomic user provisioning, the partner API and replacing static CI deploy keys with GitHub OIDC.",
      ],
    },
  },
  {
    slug: "crop-models",
    title: "Crop intelligence: from models to products",
    highlight: "FAO, yield, CropScan",
    status: "CropScan in progress",
    built:
      "The engineering that turns crop models into products: the FAO crop-pattern planning platform, a pixel-level corn and soybean yield pipeline, and CropScan, which I'm building now.",
    stack: ["FastAPI", "Angular", "PostGIS", "Apache Airflow", "Google Earth Engine", "TensorFlow"],
    result: "Models built by the data science team run as scheduled pipelines and ship to clients and the FAO as products, not notebooks.",
    image: {
      src: "/images/projects/crop-models.svg",
      alt: "Crop intelligence platform: Earth observation and field data feed Airflow pipelines that run the data science team's models; outputs go to S3 and PostGIS and power the FAO planner, yield estimates and CropScan, which is in progress.",
    },
    caseStudy: {
      context: [
        "Farmdar's data scientists build the models: crop classification, yield prediction and evapotranspiration. Getting them to customers needs data pipelines, storage, APIs and interfaces around them. That is the part my team owns.",
      ],
      architecture: [
        "FAO crop-pattern planning tool: planners in Punjab and Sindh test what-if crop patterns and see the effect on water demand, water shortage, yield and water productivity, including climate projections. The platform is a FastAPI service for layers, statistics, scenarios, projections, validation and export; Airflow DAGs for ingest and zonal statistics; crop-map storage at the delivered 10 m resolution; and per-crop validation metrics.",
        "Corn and soybean yield: a pixel-level time-series network in TensorFlow, with a data and inference pipeline around it covering feature acquisition from Google Earth Engine (Sentinel-2, Landsat, weather), moving storage to S3 and Parquet, logged and error-handled batch prediction, and applying calibration factors to outputs.",
        "CropScan (in progress): I'm building CropScan's production pipeline as Airflow DAGs that turn crop classification outputs into area statistics, map tilesets and client report packages, with a B2B portal on top.",
      ],
      decisions: [
        {
          title: "Pipelines around notebooks, not rewrites",
          body: "Model code stays in the form the data scientists maintain. The platform runs it with parameters, on the right hardware, and stores outputs where the API can serve them.",
        },
        {
          title: "Keep the delivered resolution",
          body: "For the FAO tool, crop maps are stored at the 10 m resolution they were delivered at, rather than resampled, so area statistics match the source maps.",
        },
        {
          title: "Validation is a feature",
          body: "The FAO tool shows per-crop accuracy metrics next to the maps, so planners can see how far to trust each layer.",
        },
      ],
      role: [
        "I lead the team that takes these models to production: the APIs, pipelines, storage and interfaces, working with the data scientists on how their models run at scale. CropScan's pipeline is what I'm building now.",
      ],
    },
  },
];

export const otherProjects = [
  {
    title: "Roman Urdu Compiler",
    description: "A compiler and virtual machine in C++ with an LL(1) parser and bytecode execution.",
    // PLACEHOLDER: replace with the repository URL.
    url: "https://github.com/UmairMirza1?tab=repositories",
    stack: ["C++", "Compilers"],
  },
];

export const skillGroups = [
  {
    name: "Languages",
    items: [
      "Go",
      "Python (Airflow, FastAPI, Django, GDAL, Rasterio, NumPy, Pandas)",
      "TypeScript (Angular, React)",
      "SQL",
    ],
  },
  {
    name: "Data and geospatial",
    items: [
      "Apache Airflow",
      "Apache Iceberg",
      "AWS S3 Tables",
      "Trino",
      "Spark",
      "PostgreSQL",
      "PostGIS",
      "MongoDB",
      "Google Earth Engine",
      "TensorFlow",
      "Mapbox GL",
    ],
  },
  {
    name: "Cloud and infrastructure",
    items: [
      "AWS (EKS, RDS, S3, Cognito, IAM)",
      "Kubernetes",
      "Terraform",
      "Helm",
      "GitHub Actions",
    ],
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    school: "FAST-NUCES, Lahore",
    year: "2023",
    achievements: [
      "Dean's List, four consecutive semesters",
      "Teaching Assistant",
    ],
  },
];
