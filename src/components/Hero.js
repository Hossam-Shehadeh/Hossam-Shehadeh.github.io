'use client'

import { motion } from 'framer-motion'
import { GitlabIcon as GitHub, Linkedin } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hossam Shehadeh
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl text-blue-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Engineer
          </motion.h2>
          <motion.p
            className="text-xl mb-12 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           I am a dedicated problem-solver with expertise in Full-Stack Development, AI-driven technologies, Business Analysis, and Python programming. I thrive on turning complex challenges into innovative and efficient solutions. With a strong foundation in analyzing business processes, I specialize in creating technical solutions that align seamlessly with organizational goals and deliver impactful results.
          </motion.p>
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { Icon: GitHub, href: 'https://github.com/Hossam-Shehadeh' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/hossam-shehadeh' },
              // { Icon: Mail, href: 'mailto:john@example.com' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full hover:bg-blue-100 transition-colors duration-300 shadow-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} className="text-blue-300" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-blue-50"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

