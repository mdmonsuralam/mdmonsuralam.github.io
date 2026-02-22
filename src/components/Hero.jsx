import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hi, I'm <span className="text-accent">Your Name</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-gray-300 mb-8">
          Full Stack Developer | Problem Solver | Creative Thinker
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I create beautiful, responsive, and functional web experiences. With expertise in modern frontend technologies
          and a passion for problem-solving, I turn ideas into reality.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
            className="px-8 py-3 border-2 border-gray-600 text-white font-semibold rounded-lg hover:border-accent transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
