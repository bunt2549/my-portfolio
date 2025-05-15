import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className='flex flex-col gap-4 mt-5 max-w-3xl'
      >
        <div
          onClick={() => window.open("mailto:bunt@gmail.com")}
          className='bg-tertiary p-5 rounded-2xl cursor-pointer hover:bg-black-200 transition-all'
        >
          <h3 className='text-white font-bold text-[20px]'>Email</h3>
          <p className='text-secondary text-[16px]'>bunt@gmail.com</p>
        </div>

        <div
          onClick={() => window.open("https://www.linkedin.com/in/bunt")}
          className='bg-tertiary p-5 rounded-2xl cursor-pointer hover:bg-black-200 transition-all'
        >
          <h3 className='text-white font-bold text-[20px]'>LinkedIn</h3>
          <p className='text-secondary text-[16px]'>linkedin.com/in/bunt</p>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");