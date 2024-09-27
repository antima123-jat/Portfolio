import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.scss";
import about from "../../assets/anime3.webp";

const About = () => {
  const baseClass = "about-container";
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      className={`${baseClass}`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className={`${baseClass}__heading`} variants={textVariants}>
        About Us
      </motion.h2>
      <div className={`${baseClass}__content`}>
        <motion.div className={`${baseClass}__img`} variants={imageVariants}>
          <img src={about} alt="about-me" />
        </motion.div>
        <motion.div className={`${baseClass}__text`} variants={textVariants}>
          <p>
            I am a dedicated and versatile frontend developer with a passion
            for creating efficient and user-friendly web applications. With 6
            months of professional experience, I have worked with a variety of
            technologies, including React, Next.js, Node.js, MySQL, PostgreSQL,
            and MongoDB. My journey in web development began with a deep
            curiosity for how things work, and it has evolved into a career
            where I continuously strive to learn and adapt to new challenges. I
            thrive in collaborative environments and enjoy solving complex
            problems to deliver high-quality solutions. Outside of coding, I
            enjoy staying active, exploring new technologies, and contributing
            to open-source projects.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
