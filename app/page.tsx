'use client'

import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { motion } from 'framer-motion'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'about', component: About },
    { id: 'experience', component: Experience },
    { id: 'education', component: Education },
    { id: 'projects', component: Projects },
    { id: 'skills', component: Skills },
    { id: 'contact', component: Contact },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <nav className="mb-8">
        <ul className="flex justify-center space-x-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeSection === section.id
                    ? 'bg-teal-500 text-black'
                    : 'bg-black text-teal-500 border border-teal-500'
                } transition-colors duration-300`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <motion.div
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {sections.find((section) => section.id === activeSection)?.component()}
      </motion.div>
    </div>
  )
}

