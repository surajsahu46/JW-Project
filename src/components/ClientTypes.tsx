import { motion } from 'framer-motion';
import { Rocket, Users, Building2, LineChart, ExternalLink } from 'lucide-react';

const clients = [
  { name: 'Startups', icon: Rocket, link: '#' },
  { name: 'Marketing teams', icon: Users, link: '#' },
  { name: 'Agencies', icon: Building2, link: '#' },
  { name: 'B2B SaaS', icon: LineChart, link: '#' },
];

export default function ClientTypes() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          I often work with:
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-lg bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm hover:from-gray-800/50 hover:to-gray-700/30 transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <client.icon className="w-12 h-12 text-pink-200 group-hover:text-pink-300 transition-colors" />
                <span className="text-xl text-gray-200">{client.name}</span>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-pink-200 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}