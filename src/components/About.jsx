import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section id="about" className='relative min-h-screen'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >        As a person who has great interest in programming and visual game art design, 
        I've crafted and coded a few web programs that had led to my foundation and 
        ensure my interest in computer science. 

        I earned an interest in this program since very early of my middle school. 
        I love video games and as I grow up I begin to think about how incredible 
        it would be if I were able to craft and program my own video game with the 
        story plot and ending that I want.

        With these interest, I enrolled myself in the a coding course where I learnt 
        how to code using C+, Java, Unity, HTML and Python. This further extends my 
        scope in computer language and programming. I've learnt that there's more 
        than just coding to make program some video games, but I could also program 
        some useful platform that could be useful for people's day to day life.
      </motion.p>
    </section>
  );
};

export default SectionWrapper(About, "about");