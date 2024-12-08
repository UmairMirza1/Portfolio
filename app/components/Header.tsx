import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="text-center mb-8">
      <motion.h1 
        className="text-5xl font-bold mb-2 text-teal-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Umair Mirza
      </motion.h1>
      <motion.p 
        className="text-2xl text-teal-300"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Software Engineer
      </motion.p>
    </header>
  )
}

