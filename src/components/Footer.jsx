import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/50 border-t border-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-accent">MD MONSUR</span> ALAM
            </h3>
            <p className="text-gray-400 text-sm">Building beautiful digital experiences with modern technology.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: '🐦', label: 'Twitter', link: '#' },
                { icon: '💼', label: 'LinkedIn', link: '#' },
                { icon: '🐙', label: 'GitHub', link: 'https://github.com/mdmonsuralam' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-lg hover:bg-accent/20 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-secondary my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
        >
          <p>&copy; {currentYear} MD MONSUR ALAM. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">
            Designed & Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
