// import React from 'react'
// import logo from "../assets/aliAiDLogo1.png";
import logo from "../assets/3.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
// import About from "./About";
// import Technologies from "./components/Technologies";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// https://github.com/aalgharib
//https://www.linkedin.com/in/ali-al-gharibawi-ai-developer
//https://www.instagram.com/baquralgharib/
//https://www.facebook.com/ali.algharibawi.3/

// <About />
// <Technologies />
// <Experience />
// <Projects />
// <Contact />
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <ul>
          <li>
            <a href="https://aliaidev.vercel.app/">
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                className="mx-0 sm:mx-0 w-40"
                src={logo}
                alt="logo"
              />
            </a>
          </li>
          {/* <li>
            <a className="mx-4 w-40" href="#">
              About
            </a>
          </li>
          <li>
            <a className="mx-4 w-40" href="#">
              Technologies
            </a>
          </li>
          <li>
            <a className="mx-4 w-40" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="mx-4 w-40" href="#">
              Experiences
            </a>
          </li>
          <li>
            <a className="mx-4 w-40" href="#">
              Contact
            </a>
          </li> */}
        </ul>
      </div>
      <div className="m-8 flex items-center justify-center sm:justify-start gap-4 text-2xl mx-1">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          href="https://www.linkedin.com/in/ali-ai-dev"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          href="https://github.com/aalgharib"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          href="https://www.facebook.com/ali.algharibawi.3/"
        >
          <FaFacebook />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          href="https://www.instagram.com/baquralgharib/"
        >
          <FaInstagram />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
