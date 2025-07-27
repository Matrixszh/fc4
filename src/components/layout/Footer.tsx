import { Link } from "react-router-dom";
import { Instagram, Linkedin, FileCode2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-light-gray py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <motion.div 
                className="h-10 w-10 rounded-full red-yellow-gradient flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-xl">P</span>
              </motion.div>
              <span className="text-xl font-bold">Portfolio</span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Building digital products, brands, and experiences that people love.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, backgroundColor: "#FF3B3F", color: "#fff" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, backgroundColor: "#FF3B3F", color: "#fff" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <FileCode2 size={18} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, backgroundColor: "#FF3B3F", color: "#fff" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Gallery", "Contact"].map(
                (item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      {item}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4">Contact Info</h3>
            <motion.ul 
              className="space-y-3 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>hello@portfolio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Design Street
                <br />
                Creative City, 10001
              </li>
            </motion.ul>
          </div>
        </div>

        <motion.div 
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}