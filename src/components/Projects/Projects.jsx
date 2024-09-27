import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Projects.scss";
import project from "../../assets/projects/project-1.jpg";
import project2 from "../../assets/projects/project-2.jpg";

const Projects = () => {
  const baseClass = "projects";
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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.11113 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

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

  const tech = ["React.js", "Tailwind-css", "css", "framer-Motion"];

  return (
    <motion.div
    ref={ref}
      className={`${baseClass}__container`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <h1 className={`${baseClass}__heading`}>Projects</h1>

      <motion.div className={`${baseClass}__content`} variants={itemVariants}>
        <motion.div className={`${baseClass}__image`} variants={imageVariants}>
          <img src={project} alt="project-image" />
        </motion.div>
        <motion.div className={`${baseClass}__details`}>
          <motion.h2 className={`${baseClass}__details__title`}>
            Virtual Station
          </motion.h2>
          <motion.p className={`${baseClass}__details__description`}>
            A fully functional virtual station app with features like workspace
            and virtual rooms creation , meeting, whiteboard, screenshare , chat
            , time tracking, audio chat, video chat and many more.
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

      <motion.div className={`${baseClass}__content`} variants={itemVariants}>
        <motion.div className={`${baseClass}__image`}>
          <img src={project2} alt="project-image" />
        </motion.div>
        <motion.div className={`${baseClass}__details`}>
          <motion.h2 className={`${baseClass}__details__title`}>
            Portfolio Website
          </motion.h2>
          <motion.p className={`${baseClass}__details__description`}>
            A personal portfolio website showcasing projects, skills and contact
            information.
          </motion.p>
          <motion.div className={`${baseClass}__technologies`}>
            {tech.map((tech, index) => (
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

export default Projects;
