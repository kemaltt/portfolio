import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
  category: string;
  featured: boolean;
}

interface PortfolioProps {
  isDark: boolean;
}

const projects: Project[] = [
  {
    title: "E-Ticaret Platformu",
    description: "Modern bir e-ticaret platformu. React, Node.js ve MongoDB kullanılarak geliştirildi. Kullanıcı dostu arayüz, güvenli ödeme sistemi ve admin paneli içerir.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://github.com",
    github: "https://github.com",
    category: "Full Stack",
    featured: true
  },
  {
    title: "Task Yönetim Uygulaması",
    description: "Kullanıcı dostu bir task yönetim uygulaması. Next.js ve Firebase ile geliştirildi. Gerçek zamanlı güncellemeler ve takım işbirliği özellikleri.",
    image: "/projects/task-manager.jpg",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    link: "https://github.com",
    github: "https://github.com",
    category: "Frontend",
    featured: true
  },
  {
    title: "Blog Platformu",
    description: "SEO dostu bir blog platformu. Next.js ve Prisma kullanılarak geliştirildi. Markdown desteği, kategori sistemi ve yorum özelliği.",
    image: "/projects/blog.jpg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Markdown"],
    link: "https://github.com",
    github: "https://github.com",
    category: "Full Stack",
    featured: false
  },
  {
    title: "Portfolio Sitesi",
    description: "Modern ve responsive portfolio sitesi. Framer Motion animasyonları ve dark/light tema desteği ile geliştirildi.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    link: "https://github.com",
    github: "https://github.com",
    category: "Frontend",
    featured: false
  },
  {
    title: "API Gateway",
    description: "Mikroservis mimarisi için API Gateway. Rate limiting, authentication ve load balancing özellikleri ile geliştirildi.",
    image: "/projects/api-gateway.jpg",
    technologies: ["Node.js", "Redis", "Docker", "JWT"],
    link: "https://github.com",
    github: "https://github.com",
    category: "Backend",
    featured: false
  },
  {
    title: "Dashboard Analytics",
    description: "Gerçek zamanlı veri analizi dashboard'u. Chart.js ve WebSocket kullanılarak geliştirildi.",
    image: "/projects/dashboard.jpg",
    technologies: ["React", "Chart.js", "WebSocket", "Node.js"],
    link: "https://github.com",
    github: "https://github.com",
    category: "Frontend",
    featured: false
  }
];

export default function Portfolio({ isDark }: PortfolioProps) {
  return (
    <section id="portfolio" className={`py-20 relative ${
      isDark ? 'bg-gray-900/50' : 'bg-slate-50/50'
    } backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Projelerim
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`w-24 h-1 mx-auto rounded-full ${
                isDark ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
              }`}
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl mt-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Geliştirdiğim bazı projeler
            </motion.p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold mb-8 text-center ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Öne Çıkan Projeler
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className={`group rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl ${
                    isDark ? 'bg-gray-800/50' : 'bg-white/50'
                  } backdrop-blur-sm border border-transparent hover:border-blue-500/20`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <div className={`absolute inset-0 ${
                      isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100/30 to-purple-100/30'
                    }`}></div>
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      isDark ? 'bg-gray-700' : 'bg-blue-50'
                    }`}>
                      <div className="text-6xl opacity-20">🚀</div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-black/20'
                          } text-white backdrop-blur-sm`}
                        >
                          <FaExternalLinkAlt />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-black/20'
                          } text-white backdrop-blur-sm`}
                        >
                          <FaGithub />
                        </motion.a>
                      </div>
                    </div>
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                      isDark 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{project.title}</h3>
                    <p className={`mb-6 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isDark 
                              ? 'bg-gray-700 text-blue-400' 
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <FaEye className="inline mr-2" />
                        Projeyi İncele
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          isDark 
                            ? 'border border-gray-600 text-gray-300 hover:bg-gray-700' 
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <FaGithub className="inline mr-2" />
                        Kod
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-3xl font-bold mb-8 text-center ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Tüm Projeler
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`group rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isDark ? 'bg-gray-800/50' : 'bg-white/50'
                  } backdrop-blur-sm border border-transparent hover:border-blue-500/20`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <div className={`absolute inset-0 ${
                      isDark ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-100/30 to-purple-100/30'
                    }`}></div>
                    <div className={`absolute inset-0 flex items-center justify-center ${
                      isDark ? 'bg-gray-700' : 'bg-blue-50'
                    }`}>
                      <div className="text-4xl opacity-20">💻</div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-black/20'
                          } text-white backdrop-blur-sm`}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2 rounded-full ${
                            isDark ? 'bg-white/20' : 'bg-black/20'
                          } text-white backdrop-blur-sm`}
                        >
                          <FaGithub className="text-sm" />
                        </motion.a>
                      </div>
                    </div>
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                      isDark 
                        ? 'bg-blue-600/20 text-blue-400' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-800'
                    }`}>{project.title}</h3>
                    <p className={`mb-4 text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 rounded-full text-xs ${
                            isDark 
                              ? 'bg-gray-700 text-blue-400' 
                              : 'bg-blue-50 text-blue-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          isDark 
                            ? 'bg-gray-700 text-gray-400' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-center text-sm transition-colors shadow-md hover:shadow-lg"
                      >
                        İncele
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                          isDark 
                            ? 'border border-gray-600 text-gray-300 hover:bg-gray-700' 
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <FaGithub className="inline mr-1" />
                        Kod
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 