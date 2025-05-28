import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <section id='contact' className='relative min-h-screen'>
      <motion.div
        variants={textVariant()}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} `}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText}`}>Contact.</h2>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className='flex flex-col gap-4 mt-5 max-w-3xl'
        >
          <div className='bg-tertiary p-5 rounded-2xl'>
            <h3 className='text-white font-bold text-[20px]'>Email</h3>
            <p className='text-secondary text-[16px]'>
              tanatanpimhnu@gmail.com
            </p>
          </div>

          <div
            onClick={() => window.open("https://github.com/bunt2549")}
            className='bg-tertiary p-5 rounded-2xl cursor-pointer hover:bg-black-200 transition-all'
          >
            <h3 className='text-white font-bold text-[20px]'>GitHub</h3>
            <p className='text-secondary text-[16px]'>github.com/bunt2549</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "");