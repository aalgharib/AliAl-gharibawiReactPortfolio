import { HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero-image.png";
import { motion } from "framer-motion";

const fadeLeft = (delay) => ({
  hidden: { x: -60, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, delay } },
});

const Hero = () => {
  return (
    <section id="hero" className="border-b border-neutral-800 pb-12 lg:mb-16">
      <div className="flex flex-wrap items-center">
        {/* Text */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.p
              variants={fadeLeft(0)}
              initial="hidden"
              animate="visible"
              className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-500"
            >
              AI Software Engineer · Founder @ Synosys
            </motion.p>

            <motion.h1
              variants={fadeLeft(0.15)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-bold tracking-tight text-white lg:mt-8 lg:text-7xl"
            >
              Ali <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Al-gharibawi
              </span>
            </motion.h1>

            <motion.p
              variants={fadeLeft(0.3)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 text-base font-light leading-relaxed tracking-tight text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={fadeLeft(0.45)}
              initial="hidden"
              animate="visible"
              className="mt-4 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white
                           shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] hover:bg-blue-500
                           hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-neutral-700 px-6 py-3 text-sm font-semibold
                           text-neutral-300 hover:border-blue-500 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl w-full max-w-sm object-cover shadow-[0_0_60px_-15px_rgba(37,99,235,0.3)]"
              src={heroImage}
              alt="Ali Al-gharibawi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
