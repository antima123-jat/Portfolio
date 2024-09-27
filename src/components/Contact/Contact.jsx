import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Contact.scss";

const Contact = () => {
  const baseClass = "contact";
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
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      className={`${baseClass}__container`}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h1 className={`${baseClass}__heading`} variants={itemVariants}>
        Get In Touch
      </motion.h1>
      <motion.div className={`${baseClass}__details`} variants={itemVariants}>
        <p className={`${baseClass}__item`}>
          <a href="/">
            {" "}
            <u>F-29 Ambuja Township Rabriyawas Pali Rajasthan</u>
          </a>
        </p>
        <p className={`${baseClass}__item`}>
          <a href="/">
            {" "}
            <u>+91 8619749796</u>
          </a>
        </p>
        <p className={`${baseClass}__item`}>
          <a href="/">
            {" "}
            <u>Antima142005@gmail.com</u>
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
