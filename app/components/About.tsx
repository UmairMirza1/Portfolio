import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">About Me</h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-lg p-6 text-white"
      >
        <p className="mb-4">
          I am Umair Mirza, a dedicated software engineer with a proven track record of delivering impactful solutions in Agritech, AI, and geospatial systems. With expertise in Golang, Angular, React, PostGIS, Kubernetes, and Terraform, I lead cross-functional teams to build scalable, data-driven platforms transforming how industries operate.
        </p>
        <p className="mb-4">
          At Farmdar, I spearheaded the development of YieldPro, a cutting-edge crop monitoring platform analyzing real-time data for over 100,000 acres. From building AI-powered crop classification systems processing satellite imagery across 350M+ acres to designing robust geospatial architectures, I create tech solutions that drive results.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-teal-400">Highlights of my work:</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Architected monolithic and microservices ecosystems processing 50k+ daily requests.</li>
          <li>Developed 10+ Airflow pipelines for GIS and remote sensing workflows.</li>
          <li>Built RBAC systems enhancing security for internal and external stakeholders.</li>
          <li>Mentored engineers across disciplines, fostering career growth and innovation.</li>
        </ul>
        <p className="mb-4">
          Beyond engineering, I bring passion for blockchain, machine learning, and scalable software development. From creating a Roman Urdu compiler to building blockchain-based e-voting systems, I thrive at the intersection of technology and problem-solving.
        </p>
        <p>
          Let's connect to discuss ideas, collaboration opportunities, or how we can leverage technology to solve real-world challenges.
        </p>
      </motion.div>
    </section>
  )
}

