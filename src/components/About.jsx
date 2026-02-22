import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            About <span className="text-accent">Me</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left Side - Image Placeholder */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-accent to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </motion.div>

          {/* Right Side - Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate developer with a deep interest in creating elegant solutions to complex problems. With
              several years of experience in web development, I've worked on a variety of projects from startups to
              established companies.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in tech started with a curiosity about how things work. Today, I focus on writing clean, scalable
              code and delivering user-centered experiences that make a difference.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-accent">Key Focus Areas:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Frontend Development (React, Vue, Angular)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Responsive & Accessible Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  Performance Optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  User Experience Design
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
