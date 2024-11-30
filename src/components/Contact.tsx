import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-t from-gray-900 to-black" id="contact">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Get in touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-pink-200 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-gray-400">hello@example.com</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-pink-200 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-pink-200 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Wales, United Kingdom</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4 pt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github className="w-6 h-6 text-pink-200" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-pink-200" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-6 h-6 text-pink-200" />
              </motion.a>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 rounded-lg text-black font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}