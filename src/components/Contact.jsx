import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'monsuralam0565@gmail.com', link: 'mailto:monsuralam0565@gmail.com' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', link: '#' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/mdmonsuralam', link: 'https://github.com/mdmonsuralam' },
    { icon: '📱', label: 'Phone', value: '+8801759468925', link: 'tel:+8801759468925' },
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
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-center"
        >
          Get In <span className="text-accent">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
        >
          Have a question or want to work together? Feel free to reach out. I'll get back to you as soon as possible.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
              >
                <span className="text-3xl">{info.icon}</span>
                <div>
                  <p className="text-sm text-gray-400">{info.label}</p>
                  <p className="text-lg font-medium group-hover:text-accent transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: '🐦', label: 'Twitter', link: '#' },
                  { icon: '💼', label: 'LinkedIn', link: '#' },
                  { icon: '🐙', label: 'GitHub', link: 'https://github.com/mdmonsuralam' },
                  { icon: '📸', label: 'Instagram', link: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="w-12 h-12 bg-secondary/50 rounded-lg flex items-center justify-center text-xl hover:bg-accent/20 transition-colors"
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-secondary/50 border border-secondary rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                placeholder="Your message here..."
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors relative overflow-hidden"
            >
              {submitted ? (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  ✓ Message Sent!
                </motion.span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
