// contentConfig.ts

export const metaData = {
  title: "Umair Mirza",
  description: "Lead Software Engineer Portfolio",
  image: "/images/logos/web-icon.png",
}

export const profileImage = "/images/logos/profile.jpg"; 

export const headerData = {
  name: "Umair Mirza",
  title: "Lead Software Engineer | AI/ML Engineer",
  location: "Lahore, Pakistan",
  locationIcon: "FaMapMarkerAlt",
  description: "Computer Scientist with a passion for transforming innovative ideas into impactful solutions, coupled with a strong aptitude for leadership and driving team success.",
  buttons: [
      {
          text: "Download Resume",
          href: "/docs/cv.pdf",
          className: "inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear",
          isDownloadButton: true,
      },
      {
          text: "Contact Me",
          href: "mailto:umair3215@gmail.com",
          className: "shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear inline-block",
          isDownloadButton: false,
      },
  ],
};

export const skills = [
  "Golang", "Python", "Java", "JavaScript", "TypeScript", "Kotlin",
  "React", "Angular", "Next.js", "Node.js", "NestJS",
  "PostgreSQL", "MongoDB", "PostGIS", "Redis",
  "Docker", "Kubernetes", "Terraform", "AWS",
  "MapboxGL", "Kepler", "QGIS", "Google Earth Engine",
  "Machine Learning", "Deep Learning", "AI",
  "Git", "CI/CD", "Airflow", "HTML5", "CSS3"
];

export const education = [
  {
      degree: "Bachelor's in Computer Science",
      school: "National University of Computer and Emerging Sciences",
      location: "Lahore, Pakistan",
  }
];

export const aboutText = [
  "I am a Lead Software Engineer with expertise in developing Web-GIS applications and data pipelines. My focus is on creating scalable solutions that make a positive impact.",
  "With experience in both Web 2.0 and Web 3.0 technologies, I specialize in building robust applications that handle complex geospatial data. I have a particular interest in cryptography and its role in internet security.",
  "Currently, I'm leading development at Farmdar, where I work on scaling data-intensive GIS applications and implementing infrastructure that can adapt to varying loads using tools like Kubernetes."
];

export const experience = [
  {
      date: "January 2024 - Present",
      position: "Lead Software Engineer at Farmdar",
      responsibilities: [
          "Leading a team of 3+ engineers developing YieldPro, a B2B and B2B2C platform monitoring real-time crop conditions across 100,000 acres",
          "Developed an AI-powered crop classification platform covering over 350 million acres globally",
          "Built monolith Golang architecture and centralized tech infrastructure supporting multiple applications",
          "Managing infrastructure with Terraform and Kubernetes while building ML models"
      ],
      skills: ["Golang", "PostGIS", "Kubernetes", "Machine Learning", "AWS"]
  },
  {
      date: "March 2023 - December 2023",
      position: "Software Engineer at Farmdar",
      responsibilities: [
          "Collaborated in startup's early stages on core challenges",
          "Worked with MongoDB design and optimization",
          "Maintained React/Redux codebase with Kepler",
          "Developed internal console for geospatial data management"
      ],
      skills: ["React", "MongoDB", "Kepler", "GIS"]
  },
  {
      date: "October 2022 - September 2023",
      position: "Software Engineer at Tectiers",
      responsibilities: [
          "Developed distributed financial software using Angular and Python",
          "Created parser for Excel macro conversion",
          "Enhanced backend systems and database operations"
      ],
      skills: ["Angular", "Python", "PostgreSQL"]
  }
];

export const projects = [
  {
      title: "YieldPro Platform",
      description: "B2B and B2B2C platform for monitoring real-time crop conditions with AI-powered classification",
      url: "https://farmdar.ai",
      stars: null,
      skills: ["Golang", "PostGIS", "Machine Learning", "Kubernetes"],
      image: "/images/projects/yieldpro.png",
  },
  {
      title: "Roman Urdu Compiler",
      description: "Custom language compiler built in C++ enabling native community to code using Roman English, featuring Syntax Directed Translation.",
      url: "https://github.com/UmairMirza1",
      stars: null,
      skills: ["C++", "Compiler Design", "Language Processing"],
      image: "/images/projects/compiler.png",
  },
  {
      title: "AI-based Attendance System",
      description: "Android application using Deep Learning for grouped facial recognition with Java/Kotlin interoperability.",
      url: "https://github.com/UmairMirza1",
      stars: null,
      skills: ["Android", "Deep Learning", "Kotlin", "Python"],
      image: "/images/projects/attendance.png",
  }
];

export const repoLink = "https://github.com/UmairMirza1?tab=repositories";

export const posts = [
  {
      year: "2024",
      title: "Scaling GIS Applications with Golang and Kubernetes",
      url: "https://linkedin.com/in/umair-mirza-aa8a21124",
      thumbnail: "/images/posts/1.jpg"
  },
  {
      year: "2023",
      title: "Building Efficient Data Pipelines for Geospatial Data",
      url: "https://linkedin.com/in/umair-mirza-aa8a21124",
      thumbnail: "/images/posts/2.webp"
  }
];

export const footerData = {
  text: [
      'Built with Next.js and Tailwind CSS, deployed on GitHub Pages.',
      'Focused on delivering high-performance web applications.',
      'Copyright © 2024 Umair Mirza',
  ],
  socialLinks: [
      { href: 'https://github.com/UmairMirza1', icon: 'FaGithub' },
      { href: 'https://linkedin.com/in/umair-mirza-aa8a21124', icon: 'FaLinkedin' },
      { href: 'mailto:umair3215@gmail.com', icon: 'FaEnvelope' },
  ],
};