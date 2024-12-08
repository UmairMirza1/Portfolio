import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: "Lead Software Engineer",
      company: "Farmdar - Pre Series A Agritech Startup",
      period: "01/2024 - Present",
      responsibilities: [
        "Led a team of 3+ engineers to develop YieldPro, a B2B and B2B2C platform monitoring real-time crop conditions across 100,000 acres, enabling informed agricultural decisions.",
        "Developed an AI-powered crop classification platform that detects and classifies crops from satellite imagery covering over 350 million acres across the globe.",
        "Led a team of 10+ developers, resulting in a 40% increase in on-time project deliverance, enhancing stakeholder satisfaction and trust in the team's capabilities.",
        "Developed a monolith Golang architecture and centralized tech infrastructure supporting two mobile apps and three web applications, handling over 50k requests per day and improving response times by 40% relative to legacy architecture.",
        "Designed and optimized a PostGIS(Postgres)-powered geospatial database architecture that processes gigabytes of geospatial data daily.",
        "Built over 10 automated, Airflow pipelines, encompassing satellite imagery acquisition, GIS/RS processing and subsequent user-friendly display.",
        "Introduced RBAC to enhance security and manage user permissions effectively internally and externally.",
        "Engaged in direct communication with customers, understanding their problems to enhance user-experience.",
        "Currently maintaining and expanding infrastructure with Terraform and Kubernetes, while building core Machine Learning fundamentals to develop a state-of-the-art crop classification model, transforming terabytes of data into valuable organizational IP.",
        "Mentored cross-domain engineers on a personal and professional level to build their fundamental understanding of computer science, which enabled their career progression.",
        "Implemented CI/CD pipelines using GitHub Actions and containerized applications with Docker, enhancing deployment efficiency and scalability."
      ]
    },
    {
      title: "Software Engineer",
      company: "Farmdar - Pre Series A Agritech Startup",
      period: "03/2023 - 12/2023",
      responsibilities: [
        "Collaborated in the nascent startup stages of zeroing on in core challenges and contributing to key strategic decisions and implementations.",
        "Worked with design, optimization, and querying of NoSQL - MongoDB.",
        "Maintaining legacy React/Redux codebase which used Kepler until the shift from legacy architecture.",
        "Developed an internal console for managing geospatial data in React."
      ]
    },
    {
      title: "Software Engineer",
      company: "Tectiers • Austria",
      period: "10/2022 - 09/2023",
      responsibilities: [
        "Developed a distributed financial software using Angular with syncfusion, Python with Aspose and Postgres that brought Excel Macros to web.",
        "Wrote a parser to convert Excel macros into native excel functions to enable Excel processing in the browser."
      ]
    },
    {
      title: "Teaching Assistant",
      company: "National University of Computer and Emerging Sciences",
      period: "02/2022 - 05/2023",
      responsibilities: [
        "Bi-weekly evaluation of Java/Kotlin code of over 100 students for Android software development.",
        "Bridged communication gap for feedback between students and instructors.",
        "Evaluated 6 Open MP, MPI and Multithreaded programming projects over a period of 4 months for over 100 students."
      ]
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg p-6 text-white"
          >
            <h3 className="text-2xl font-semibold text-teal-400">{exp.title}</h3>
            <p className="text-teal-300">{exp.company}</p>
            <p className="text-teal-200 mb-2">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

