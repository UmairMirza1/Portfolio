// All site copy lives here. Source of truth: "Portfolio Website Update Brief" (Nov 2026)
// and "Umair Mirza - Resume (one page)". Keep titles, dates and numbers identical to the resume.

export const siteUrl = "https://umairmirza.com";

export const metaData = {
  title: "Umair Mirza - Tech Lead, Backend and Data Platform",
  description:
    "I lead a team of 10+ engineers at Farmdar and build geospatial data platforms on AWS: Airflow pipelines for satellite imagery, a TB-scale Apache Iceberg data lake, and Go services.",
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
    "I lead a team of 10+ engineers and build geospatial data platforms on AWS: Airflow pipelines for satellite imagery, a TB-scale Apache Iceberg data lake, and Go services.",
};

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
          "Built a TB-scale geospatial data lake on AWS S3 Tables and Apache Iceberg, queried through Trino, with PostGIS and H3 indexing.",
          "Built OAuth authentication on AWS Cognito, used by every Farmdar application, and consolidated separate services into one Go backend handling 100K+ daily requests, with P95 latency down 40%.",
          "Automated the 3 m Planet imagery pipeline (plant health, stress and productivity-zone maps), cutting delivery from weeks to hours; wrote 10+ Airflow DAGs and a custom Airflow-Kubernetes operator, cutting manual work by 70%.",
          "Own infrastructure as code with Terraform, Helm and GitHub Actions, cutting deployment time by 60%. Launched a production API adopted by FFC, Corteva, Engro and Kubota, and built a crop water requirement tool for the FAO.",
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

export type FeaturedWork = {
  title: string;
  problem: string;
  built: string;
  stack: string[];
  result: string;
  status?: string;
  // PLACEHOLDER: set `image` once Farmdar approves a public screenshot.
  image?: { src: string; alt: string };
};

export const featuredWork: FeaturedWork[] = [
  {
    title: "Geospatial data lake",
    problem:
      "Satellite imagery, field data and model outputs lived in separate stores, so every analysis started with finding and copying data.",
    built:
      "A data lake on AWS S3 Tables and Apache Iceberg, queried through Trino, with PostGIS and H3 indexing for raster and vector data.",
    stack: ["S3 Tables", "Apache Iceberg", "Trino", "PostGIS", "H3"],
    result: "TB-scale, one place to query every dataset across products covering millions of acres.",
    image: {
      src: "/images/projects/data-platform.svg",
      alt: "Data platform architecture: satellite imagery and field data flow through Airflow on EKS into an Iceberg data lake on S3 Tables, queried by Trino and served by the Go backend behind Cognito.",
    },
  },
  {
    title: "Satellite imagery pipelines",
    problem: "Imagery processing was manual and slow, and delivering new maps to customers took weeks.",
    built:
      "10+ Airflow DAGs for imagery ETL and MLOps, a custom Airflow-Kubernetes operator that runs Jupyter notebooks through Papermill (one pod per task), and an automated 3 m Planet pipeline producing plant health, stress and productivity-zone maps.",
    stack: ["Apache Airflow", "Kubernetes", "Papermill", "Python", "GDAL", "Rasterio"],
    result: "Throughput up 3x, manual work down 70%, Planet imagery delivery from weeks to hours.",
  },
  {
    title: "YieldPro",
    problem: "Growers and agribusinesses needed to see crop conditions across their fields without visiting every one.",
    built: "A crop-monitoring platform built from scratch, from the data pipelines to the map interface.",
    stack: ["Go", "PostGIS", "Airflow", "Mapbox GL", "AWS"],
    result: "$200K+ in revenue and 50K+ farmers served.",
  },
  {
    title: "Unified auth and Go backend",
    problem: "Each application had its own service and its own login, which made changes slow and access hard to manage.",
    built:
      "OAuth on AWS Cognito used by every Farmdar application, with Cognito tokens verified in Go through JWKS, and separate services consolidated into one Go backend.",
    stack: ["Go", "AWS Cognito", "OAuth", "PostgreSQL", "Kubernetes"],
    result: "100K+ daily requests, P95 latency down 40%, and a production API adopted by FFC, Corteva, Engro and Kubota.",
  },
  {
    title: "Crop intelligence models",
    problem: "Customers and partners need answers about water use, yield and crop type, not raw imagery.",
    built:
      "A crop water requirement tool built and managed for the FAO, a pixel-level corn and soybean yield model for the US Corn Belt on Google Earth Engine, and CropScan, an automated crop-mapping model, for which I curated five years of hand-labelled field data and satellite imagery into a training set in the data lake.",
    stack: ["Google Earth Engine", "TensorFlow", "Python", "Apache Iceberg"],
    result: "The FAO tool and the Corn Belt yield model are built; CropScan is in progress.",
    status: "CropScan in progress",
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
      "H3",
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
