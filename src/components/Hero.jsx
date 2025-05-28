import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ParticlesComponent } from "../components";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="absolute inset-0 z-0">
        <ParticlesComponent id="tsparticles" />
      </div>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi! I'm <span className='text-[#915EFF]'>Bunt</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className='text-[#c8b7ed]'>Computer Science</span> &{" "}
            <span className='text-[#c8b7ed]'>Economics</span> <br className='sm:block hidden' /> student
            at University of Toronto
          </p>
        </div>
      </div>      <div className="absolute inset-0 z-[15]">
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;