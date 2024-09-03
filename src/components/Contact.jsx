import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className=" border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter "
      >
        <motion.p className="my-4">{CONTACT.address}</motion.p>
        <motion.p
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="my-4 "
        >
          <a className="border-b" href={`tel:${CONTACT.phoneNo}`}>
            {CONTACT.phoneNo}
          </a>
        </motion.p>

        <motion.p
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          <a className=" border-b " href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Contact;
