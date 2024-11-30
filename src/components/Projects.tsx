import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Palette, BarChart3 } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    description: 'A modern e-commerce solution with real-time inventory management.',
    icon: Code,
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Portfolio System',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'Creative portfolio platform for designers and artists.',
    icon: Palette,
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
  },
  {
    title: 'Analytics Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    description: 'Real-time data visualization and analytics platform.',
    icon: BarChart3,
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-pink-200 to-pink-300 text-transparent bg-clip-text">
            LATEST WORK
          </span>
        </motion.h2>
        <div className="relative h-[600px] rounded-xl overflow-hidden">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-2xl">
                  <project.icon className="w-12 h-12 text-pink-200 mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 text-pink-200 hover:text-pink-300 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}