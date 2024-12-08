import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: "Roman Urdu Compiler",
      description: "Built a language in C++ for my native community to use Roman English for coding. Used Syntax Directed Translation and Top-Down Parsing with LL1 grammar. Built a VM for execution of final phase."
    },
    {
      title: "AI based Android Application (FYP)",
      description: "Developed an Android app MVP leveraging interoperability of Java and Kotlin, providing an AI-based solution for recognizing students present in a classroom within 5-10 seconds."
    },
    {
      title: "Blockchain based E-Voting Application",
      description: "Developed an ECC based modern encryption scheme (ElGammal) in Typescript based on a research paper which was used in Application. Added several features to codebase such as distributing a cryptographic number over WebRTC protocol and functionalities for different election stages."
    }
  ]

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4 text-teal-500">Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg p-6 text-white"
          >
            <h3 className="text-2xl font-semibold mb-2 text-teal-400">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

