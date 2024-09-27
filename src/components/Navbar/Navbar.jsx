import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Navbar.scss";
import Logo from "../../Logo/Logo";
import { motion } from "framer-motion";

export const Navbar = () => {
  const baseClass = "navbar-container";

  return (
    <motion.nav className={`${baseClass}`}>
      <motion.div className={`${baseClass}_container`}>
        <Logo />
      </motion.div>
      <motion.div className={`${baseClass}_container_icons`}>
        <a
          href="https://github.com/antima123-jat"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/antima-choudhary-b34998250/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </motion.nav>
  );
};
