import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'] },
    { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Webpack', 'Vite'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management'] },
    { category: 'Other', items: ['REST APIs', 'Responsive Design', 'Performance Optimization', 'Testing', 'SEO'] },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Skills & <span className="text-accent">Expertise</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-secondary/50 rounded-lg p-6 border border-secondary hover:border-accent transition-colors"
            >
              <h3 className="text-xl font-semibold text-accent mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary px-4 py-2 rounded-full text-sm font-medium border border-gray-600 hover:border-accent transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 space-y-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Technical Proficiency</h3>
          {[
            { name: 'React & Vue', percentage: 95 },
            { name: 'JavaScript/TypeScript', percentage: 90 },
            { name: 'CSS & Tailwind', percentage: 92 },
            { name: 'Web Design', percentage: 88 },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-accent">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-accent to-blue-600 h-full rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
