import { ABOUT_TEXT } from "../constants";
import aboutImage from "../assets/about-image.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="border-b border-neutral-800 pb-16 lg:mb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        About <span className="text-blue-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImage}
              alt="Ali Al-gharibawi"
              className="max-w-xs rounded-2xl object-cover shadow-[0_0_60px_-15px_rgba(37,99,235,0.25)]"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="space-y-5 max-w-xl">
            {ABOUT_TEXT.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-base font-light leading-relaxed tracking-tight text-neutral-400"
              >
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="https://synosys.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2
                           text-sm font-medium text-blue-400 hover:border-blue-400 hover:bg-blue-500/20
                           hover:text-blue-300 transition-all duration-300"
              >
                Synosys.io →
              </a>
              <a
                href="https://www.linkedin.com/in/ali-algharibawi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-neutral-700 px-4 py-2
                           text-sm font-medium text-neutral-400 hover:border-neutral-500 hover:text-white
                           transition-all duration-300"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
