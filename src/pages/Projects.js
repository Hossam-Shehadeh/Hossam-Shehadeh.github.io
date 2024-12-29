"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, GitlabIcon as GitHub, X } from 'lucide-react'

const projects = [
  {
    title: 'Co Play',
    description: 'A stadium reservation app and website with real-time booking, AI-powered suggestions, and multi-platform support.',
    image: 'https://ccccccccccoooooooooooooooooopppppppppppp.onrender.com/assets/coPlayLogo.png',
    live: 'https://coplay.world',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github:""
  },
  {
    title: 'E-commerce Website',
    description: 'A fully-featured e-commerce platform with advanced search, secure checkout, and real-time inventory updates.',
    image: 'https://files.oaiusercontent.com/file-XFQqpQdDQrgnX4F78vZtnQ?se=2024-12-29T06%3A37%3A31Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dd08fbd85-2e99-40b5-b2d1-90c439ce6eab.webp&sig=6TPSkTWgAjEDfXScxkDSYvnnT/U/QvSSWaUTfL/GcJo%3D',
    github: 'https://github.com/Hossam-Shehadeh/E-commerce',
    live: 'https://t-shoptask.onrender.com',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
  },
  {
    title: 'Reading Club Server',
    description: 'A Node.js server for managing book club meetings, discussions, and user activities. Includes role-based access and real-time communication.',
    image: 'https://files.oaiusercontent.com/file-HoEhabHgMS8ybvAomLiFDd?se=2024-12-29T06%3A37%3A39Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D3adf78a8-8012-4005-a719-97059adb6615.webp&sig=E9RJ/teEvHViE7rKSxqygFLGPFF8Be/zVPGr%2B1YgLrY%3D',
    github: 'https://github.com/Hossam-Shehadeh/Reading-Club-Management-System',
    live: 'https://documenter.getpostman.com/view/30949616/2sA3e2gV9n',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
];


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h2>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-blue-50 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{selectedProject.title}</h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="text-gray-600 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                {selectedProject.github&&<a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-600"
                >
                  <GitHub size={20} className="mr-2" />
                  GitHub
                </a>}
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-500 hover:text-blue-600"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
