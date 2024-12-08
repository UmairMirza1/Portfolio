import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Contact</h2>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 rounded-lg p-6 text-white"
      >
        <ul className="space-y-2">
          <li>
            <strong className="text-teal-400">Location:</strong> Lahore
          </li>
          <li>
            <strong className="text-teal-400">Phone:</strong> +923184164361
          </li>
          <li>
            <strong className="text-teal-400">Email:</strong> <a href="mailto:umair3215@gmail.com" className="text-teal-300 hover:underline">umair3215@gmail.com</a>
          </li>
          <li>
            <strong className="text-teal-400">LinkedIn:</strong> <a href="https://linkedin.com/in/umair-mirza-aa8a21124" target="_blank" rel="noopener noreferrer" className="text-teal-300 hover:underline">linkedin.com/in/umair-mirza-aa8a21124</a>
          </li>
        </ul>
      </motion.div>
    </section>
  )
}

