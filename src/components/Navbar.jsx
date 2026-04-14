import logo from "../assets/3.png";
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="w-36"
            src={logo}
            alt="Ali Al-gharibawi"
          />
        </a>
      </div>

      {/* Nav links — hidden on mobile */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm font-medium text-neutral-400 transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Social icons + CTA */}
      <div className="flex items-center gap-5">
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href="https://www.linkedin.com/in/ali-algharibawi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-neutral-400 hover:text-white transition-colors"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href="https://github.com/aalgharib"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-neutral-400 hover:text-white transition-colors"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href="https://www.youtube.com/@alialgharibawi9647"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-neutral-400 hover:text-white transition-colors"
        >
          <FaYoutube />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href="https://www.facebook.com/ali.algharibawi.3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-neutral-400 hover:text-white transition-colors"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          href="https://www.instagram.com/synosys.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-neutral-400 hover:text-white transition-colors"
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white
                     shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] hover:bg-blue-500
                     hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] transition-all duration-300"
        >
          Hire Me
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
