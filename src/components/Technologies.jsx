import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiFlask, SiPostgresql, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa";
import { motion } from "framer-motion";

const TECHS = [
  { icon: <RiReactjsLine className="text-5xl text-cyan-400" />, name: "React", delay: 2.5 },
  { icon: <FaPython className="text-5xl text-yellow-400" />, name: "Python", delay: 3 },
  { icon: <FaNodeJs className="text-5xl text-green-500" />, name: "Node.js", delay: 2 },
  { icon: <SiNextdotjs className="text-5xl text-white" />, name: "Next.js", delay: 3.5 },
  { icon: <SiTypescript className="text-5xl text-blue-400" />, name: "TypeScript", delay: 4 },
  { icon: <SiTailwindcss className="text-5xl text-cyan-400" />, name: "Tailwind", delay: 2.8 },
  { icon: <SiFlask className="text-5xl text-neutral-300" />, name: "Flask", delay: 5 },
  { icon: <SiMongodb className="text-5xl text-green-500" />, name: "MongoDB", delay: 3.2 },
  { icon: <SiPostgresql className="text-5xl text-blue-300" />, name: "PostgreSQL", delay: 4.5 },
];

const float = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

const Technologies = () => {
  return (
    <section id="technologies" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Tech <span className="text-blue-500">Stack</span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap items-end justify-center gap-6"
      >
        {TECHS.map(({ icon, name, delay }) => (
          <motion.div
            key={name}
            variants={float(delay)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-3 group"
          >
            <div
              className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5
                         group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]
                         transition-all duration-300"
            >
              {icon}
            </div>
            <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-300 transition-colors duration-200">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
