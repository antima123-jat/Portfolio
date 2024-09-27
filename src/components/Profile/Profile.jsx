import React, { useEffect } from "react";
import "./Profile.scss";
import AntimaChoudharyProfile from "../../assets/anime2.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Profile = () => {
  const baseClass = "content";
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`${baseClass}__container`}
      initial="hidden"
      variants={containerVariants}
      animate={controls}
    >
      <div className={`${baseClass}__text-wrapper`}>
        <motion.div className={`${baseClass}__column`} variants={textVariants}>
          <h1 className={`${baseClass}__text-container`}>Antima</h1>
          <span className={`${baseClass}__text-content`}>
            Frontend Developer
          </span>
          <p className={`${baseClass}__hero-content`}>
            <motion.div
              className={`${baseClass}__text`}
              variants={textVariants}
            >
              I am a passionate frontend developer with a knack for crafting
              robust and scalable web applications. With 6 months of hands-on
              experience, I have honed my skills in front-end technologies like
              React and Next.js, as well as back-end technologies like Node.js,
              MySQL and MongoDB. My goal is to leverage my expertise to create
              innovative solutions that drive business growth and deliver
              exceptional user experiences.
            </motion.div>
          </p>
        </motion.div>
      </div>
      <motion.div
        className={`${baseClass}__image-wrapper`}
        variants={imageVariants}
      >
        <img
          alt="profile-picture"
          src={AntimaChoudharyProfile}
          className={`${baseClass}__profile-img`}
        />
      </motion.div>
    </motion.div>
  );
};

export default Profile;
