import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="pb-24 pt-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold text-white"
      >
        Get in <span className="text-blue-500">Touch</span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl rounded-2xl border border-neutral-800 bg-neutral-900/40 p-10
                   shadow-[0_0_60px_-20px_rgba(37,99,235,0.15)]"
      >
        <p className="mb-8 text-center text-base text-neutral-400">
          Have a project in mind or want to explore what AI automation can do for your business?
          Let&apos;s talk.
        </p>

        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-3 text-neutral-400">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{CONTACT.address}</span>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-neutral-400"
          >
            <FaPhone className="text-blue-500" />
            <a
              href={`tel:${CONTACT.phoneNo}`}
              className="hover:text-white transition-colors duration-200"
            >
              {CONTACT.phoneNo}
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-neutral-400"
          >
            <FaEnvelope className="text-blue-500" />
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-white transition-colors duration-200"
            >
              {CONTACT.email}
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white
                       shadow-[0_0_20px_-5px_rgba(37,99,235,0.6)] hover:bg-blue-500
                       hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.8)] transition-all duration-300"
          >
            Send a Message
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
