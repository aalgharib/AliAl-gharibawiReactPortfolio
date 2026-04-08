import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaPlay, FaRocket } from "react-icons/fa";

const TYPE_ICONS = {
  video: <FaPlay className="text-4xl text-blue-400/60" />,
  platform: <FaRocket className="text-4xl text-blue-400/60" />,
  github: <FaGithub className="text-4xl text-blue-400/60" />,
  website: <FaGlobe className="text-4xl text-blue-400/60" />,
};

const getLinkLabel = (type) => {
  if (type === "video") return "Watch Demo";
  if (type === "github") return "View on GitHub";
  return "Visit Project";
};

const Projects = () => {
  return (
    <section id="projects" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Featured <span className="text-blue-500">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900/40 overflow-hidden
                       hover:border-blue-500/40 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]
                       transition-all duration-300"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden bg-neutral-950">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-950/60 via-neutral-900 to-neutral-950">
                  {TYPE_ICONS[project.type] ?? <FaGlobe className="text-4xl text-blue-400/60" />}
                </div>
              )}
              {project.type === "video" && (
                <span className="absolute top-3 right-3 rounded-full bg-blue-600/90 px-2 py-1 text-xs font-semibold text-white">
                  Demo
                </span>
              )}
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2 text-base font-semibold text-white">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1
                               text-xs font-medium text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-400
                           hover:text-blue-300 transition-colors duration-200 group/link"
              >
                {getLinkLabel(project.type)}
                <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
