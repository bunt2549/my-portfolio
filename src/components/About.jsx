import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an aspiring computer science student with experience in Python and
        Java, and expertise in frameworks like React, Flutter, and Three.js. 
        I'm particularly captivated by the field of fintech and enjoy collaborating 
        in group projects, hackathons, and business case competitions to create 
        efficient solutions for real-world problems.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");