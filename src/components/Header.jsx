import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <header className="fixed top-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-secondary">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold"
        >
          <span className="text-accent">MD MONSUR</span> ALAM
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ color: '#3b82f6' }}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={menuVariants}
          className="md:hidden bg-secondary border-t border-secondary"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                variants={itemVariants}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
