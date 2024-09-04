import { ABOUT_TEXT } from "../constants";
import aboutMeImageT from "../assets/aboutMeImageT.png";
import myResume from "../assets/AliAlgharibawi_Resume.pdf";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4 lg:mb-35">
      <h2 className=" my-20 text-center text-4xl">
        About<span className=" text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={aboutMeImageT} alt="Ali Al-gharibawi" />
            {/* Add this:(className="rounded-2xl") in 
            the image tag if you change the image to an image that has corners */}
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className=" justify-center lg:justify-start">
            <p className="mb-4 my-2 max-w-xl py-6 font-light tracking-tighter">
              {ABOUT_TEXT}
              {"  "}
            </p>
            <motion.p
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              className="mr-2 mt-4 rounded bg-neutral-900 w-20 px-2 py-1 
                    text-sm font-medium text-purple-700"
            >
              <a href={myResume} download="AliAlgharibawi_Resume.pdf">
                Download Resume
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
