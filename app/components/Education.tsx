import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Education</h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-lg p-6 text-white"
      >
        <h3 className="text-2xl font-semibold text-teal-400">Bachelor degree in Computer Science</h3>
        <p className="text-teal-300">National University of Computer and Emerging Sciences</p>
        <p className="text-teal-200">Lahore, Punjab, Pakistan</p>
        <p className="text-teal-200">GPA: 3.21</p>
      </motion.div>
    </section>
  )
}

