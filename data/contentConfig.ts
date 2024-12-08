// contentConfig.ts

export const metaData = {
  title: "Umair Mirza",
  description: "Lead Software Engineer Portfolio",
  image: "/images/logos/web-icon.png",
};

export const profileImage = "/images/logos/profile.jpg";

export const headerData = {
  name: "Umair Mirza",
  title: "Lead Software Engineer | AI/ML Engineer",
  location: "Lahore, Pakistan",
  locationIcon: "FaMapMarkerAlt",
  description:
    "Computer Scientist with a passion for transforming innovative ideas into impactful solutions, coupled with a strong aptitude for leadership and driving team success.",
  buttons: [
    {
      text: "Book a Meeting",
      href: "https://calendly.com/umair3215/",
      className:
        "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: false,
    },
    {
      text: "Download Resume",
      href: "/docs/cv.pdf",
      className:
        "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
      isDownloadButton: true,
    },
    {
      text: "Contact Me",
      href: "mailto:umair3215@gmail.com",
      className:
        "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear inline-block",
      isDownloadButton: false,
    },
  ],
};

export const skills = [
  "Golang",
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "Kotlin",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "PostGIS",
  "Redis",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "MapboxGL",
  "Kepler",
  "QGIS",
  "Google Earth Engine",
  "Machine Learning",
  "Deep Learning",
  "AI",
  "CI/CD",
  "Airflow",
];

export const education = [
  {
    degree: "Bachelor's in Computer Science",
    school: "National University of Computer and Emerging Sciences (FAST-NUCES)",
    location: "Lahore, Pakistan",
    date: "2018 - 2022",
    GPA: "3.21",
    achievements: "Dean's List GPA consecutively for 4 semesters in final 2 years\n Teacher's Assistant for 1.5 years"

  },
];

export const aboutText = [
  "I am a Software Engineer with expertise in developing Web-GIS applications and scalable data pipelines. I love to peel abstractions of computer science as well the providing value to the consumers to generate impact and make money. My focus is on creating scalable solutions that make a positive impact. I like to reason from first principles and enjoy working on challenging problems",
];

export const experience = [
  {
    date: "January 2024 - Present",
    position: "Lead Software Engineer at Farmdar",
    responsibilities: [
      "Leading a team of 3+ engineers developing YieldPro, a B2B and B2B2C platform monitoring real-time crop conditions across 100,000 acres",
      "Developed an AI-powered crop classification platform covering over 350 million acres globally",
      "Built monolith Golang architecture and centralized tech infrastructure supporting multiple applications",
      "Managing infrastructure with Terraform and Kubernetes while building ML models",
    ],
    skills: [
      "Golang",
      "PostGIS",
      "Kubernetes",
      "Machine Learning",
      "AWS",
      "Mapbox",
    ],
  },
  {
    date: "March 2023 - December 2023",
    position: "Software Engineer at Farmdar",
    responsibilities: [
      "Collaborated in startup's early stages on core challenges",
      "Worked with MongoDB design and optimization",
      "Maintained React/Redux codebase with Kepler",
      "Developed internal console for geospatial data management",
    ],
    skills: ["React", "MongoDB", "Kepler", "GIS", "Mapbox"],
  },
  {
    date: "October 2022 - September 2023",
    position: "Software Engineer at Tectiers",
    responsibilities: [
      "Developed distributed financial software using Angular and Python",
      "Created parser for Excel macro conversion",
      "Enhanced backend systems and database operations",
    ],
    skills: ["Angular", "Python", "PostgreSQL", "Mapbox"],
  },
];

export const projects = [
  {
    title: "YieldPro Platform",
    description:
      "B2B and B2B2C platform for monitoring real-time crop conditions with AI-powered classification",
    url: "https://farmdar.ai",
    stars: null,
    skills: ["Golang", "PostGIS", "Machine Learning", "Kubernetes","GIS", "Mapbox", "AWS", "Terraform"],
    image: "/images/projects/YieldPro.jpeg",
  },
  {
    title: "Roman Urdu Compiler",
    description:
      "Custom language compiler built in C++ enabling native community to code using Roman English, featuring Syntax Directed Translation.",
    url: "https://github.com/UmairMirza1",
    stars: null,
    skills: ["C++", "Compiler Design", "Language Processing"],
    image: "/images/projects/compiler.jpeg",
  },
  {
    title: "Airflow Data Pipeline",
    description:
      "Data pipelines for parallel processing of satellite imagery and weather data using Apache Airflow, Google Earth Engine, and QGIS",
    url: "",
    stars: null,
    skills: ["Apache Airflow", "Google Earth Engine", "QGIS", "GIS", "GDAL", "Rasterio"],
    image: "/images/projects/Airflow.png",
  },
  {
    title: "Cropscan",
    description:
      "Crop classification platform using AI and satellite imagery covering 350 million acres globally, able to display GBs of data in seconds",
    url: "https://www.farmdar.ai/products",
    stars: null,
    skills: ["Mapbox", "MongoDB", "Kepler", "GIS", 'Remote Sensing'],
    image: "/images/projects/Cropscan.jpeg",
  },
  {
    title: "AI-based Mobile Application",
    description:
      "Android application using Deep Learning for grouped facial recognition accounting to low light classroom environments with Java/Kotlin interoperability.",
    url: "https://github.com/UmairMirza1",
    stars: null,
    skills: ["Android", "Deep Learning", "Kotlin", "Python"],
    image: "/images/projects/Oneclick.jpeg",
  },
];

export const repoLink = "https://github.com/UmairMirza1?tab=repositories";

export const posts = [
  {
    year: "2024",
    title: "Building product and leading teams ",
    url: "https://www.linkedin.com/posts/activity-7243298619137679360-3fqo?utm_source=share&utm_medium=member_desktop",
    thumbnail: "/images/posts/1.jpg",
  },
  {
    year: "2023",
    title: "How working at startups fosters growth",
    url: "https://www.linkedin.com/posts/activity-7134162097134784512-bGhs?utm_source=share&utm_medium=member_desktop",
    thumbnail: "/images/posts/2.webp",
  },
];

export const footerData = {
  text: [
    "Let's connect and build something great together!",
  ],
  socialLinks: [
    { href: "https://github.com/UmairMirza1", icon: "FaGithub" },
    {
      href: "https://linkedin.com/in/umair-mirza-aa8a21124",
      icon: "FaLinkedin",
    },
    { href: "mailto:umair3215@gmail.com", icon: "FaEnvelope" },
  ],
};
