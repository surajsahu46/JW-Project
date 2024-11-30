import { motion } from 'framer-motion';

const companies = [
  { name: 'Mercedes-Benz', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/2048px-Mercedes-Logo.svg.png' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.png/1024px-Adobe_Corporate_Logo.png' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2048px-IBM_logo.svg.png' },
];

export default function Companies() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 md:h-16 object-contain opacity-50 hover:opacity-75 transition-opacity filter invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}