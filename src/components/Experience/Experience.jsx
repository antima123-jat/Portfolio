import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Experience.scss";

const Experience = () => {
  const baseClass = "experience";
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const technologies = [
    "JavaScript",
    "Node.js",
    "React.js",
    "TypeScript",
    "Redux",
    "MySQL",
    "MongoDB",
    "AntDesign",
  ];

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
      className={baseClass}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h1 className={`${baseClass}__heading`} variants={textVariants}>
        Experience
      </motion.h1>
      <motion.div
        className={`${baseClass}__container`}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={`${baseClass}__year`}>
          <motion.p variants={textVariants}>Dec 2023 - July 2024</motion.p>
        </motion.div>
        <motion.div className={`${baseClass}__details`}>
          <motion.h2
            className={`${baseClass}__company`}
            variants={imageVariants}
          >
            Webkalakaar Pvt Ltd
          </motion.h2>
          <motion.h3 className={`${baseClass}__role`} variants={imageVariants}>
            Jr. Software Developer
          </motion.h3>
          <motion.p
            className={`${baseClass}__description`}
            variants={imageVariants}
          >
            Developing responsive and user-friendly web applications using
            modern frontend technologies. Collaborating with cross-functional
            teams to design and implement new features. Focusing on creating
            efficient, scalable, and maintainable code. Integrating frontend
            interfaces with backend APIs and databases. Continuously learning
            and adapting to new technologies and best practices in web
            development.
          </motion.p>
          <motion.div className={`${baseClass}__technologies`}>
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className={`${baseClass}__technologies__tech-box`}
                variants={imageVariants}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
