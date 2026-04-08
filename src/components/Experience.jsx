import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Work <span className="text-blue-500">Experience</span>
      </motion.h2>

      <div className="space-y-8">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap lg:justify-center">
            {/* Year */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-medium text-neutral-500">
                {experience.year}
              </p>
            </motion.div>

            {/* Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6
                              hover:border-blue-500/30 hover:shadow-[0_0_30px_-10px_rgba(37,99,235,0.25)]
                              transition-all duration-300">
                <h6 className="mb-1 text-base font-semibold text-white">
                  {experience.role}{" "}
                  <span className="text-blue-400">@ {experience.company}</span>
                </h6>
                <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1
                                 text-xs font-medium text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
