import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js. Includes product filtering, cart management, and secure payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      emoji: '🛍️',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates. Users can create projects, assign tasks, and track progress with a clean, intuitive interface.',
      tags: ['React', 'Firebase', 'Tailwind', 'WebSocket'],
      link: '#',
      emoji: '✅',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays current weather and forecasts. Features location-based weather, interactive maps, and detailed analytics.',
      tags: ['Vue.js', 'Weather API', 'Charts.js', 'Geolocation'],
      link: '#',
      emoji: '🌤️',
    },
    {
      title: 'Social Media Analytics',
      description: 'Dashboard for analyzing social media metrics across platforms. Real-time data visualization, trend analysis, and automated reporting features.',
      tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#',
      emoji: '📊',
    },
    {
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, user authentication, and content management. Features include comments, likes, and sharing.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'JWT'],
      link: '#',
      emoji: '📝',
    },
    {
      title: 'AI Chat Interface',
      description: 'An intuitive chat interface powered by AI. Features conversation history, user preferences, and seamless integration with multiple AI models.',
      tags: ['React', 'OpenAI API', 'Socket.io', 'Python'],
      link: '#',
      emoji: '💬',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          My <span className="text-accent">Projects</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
              className="bg-primary border border-secondary rounded-lg overflow-hidden hover:border-accent transition-all group cursor-pointer"
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-accent/20 to-blue-600/20 p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                <span className="text-3xl">{project.emoji}</span>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-secondary/50 text-accent text-xs px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="flex items-center text-accent pt-4 border-t border-secondary group">
                  <span className="text-sm font-semibold">View Project</span>
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
