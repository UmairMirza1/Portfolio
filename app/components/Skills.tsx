import { motion } from 'framer-motion'

export default function Skills() {
  const skills = {
    "Programming Languages": ["Golang", "Java", "Javascript", "Kotlin", "Python", "Typescript"],
    "Tools": ["Airflow", "Angular", "Google Earth Engine", "Kubernetes", "Mapbox", "Nodejs", "QGIS", "React", "Sentinel Hub", "Terraform"],
    "Leadership": ["Mentoring", "Problem Solving", "Team Work"]
  }

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, skillList], index) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg p-6 text-white"
          >
            <h3 className="text-2xl font-semibold mb-2 text-teal-400">{category}</h3>
            <ul className="list-disc list-inside">
              {skillList.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

