import React from "react";
import { FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiAntdesign,
  SiBootstrap,
  SiTypescript,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
  SiCss3,
  SiSocketdotio,
  SiRedux,
} from "react-icons/si";
import "./Technologies.scss";

const technologies = [
  { icon: <FaReact size={40} />, name: "React.js" },
  { icon: <SiJavascript size={40} />, name: "JavaScript" },
  { icon: <SiRedux size={40} />, name: "Redux" },
  { icon: <SiTypescript size={40} />, name: "TypeScript" },
  { icon: <SiAntdesign size={40} />, name: "AntDesign" },
  { icon: <SiCss3 size={40} />, name: "CSS" },
  { icon: <FaNodeJs size={40} />, name: "Node.js" },
  { icon: <SiMysql size={40} />, name: "MySQL" },
  { icon: <SiBootstrap size={40} />, name: "Bootstrap" },
  { icon: <SiSocketdotio size={40} />, name: "Socket.io" },
  { icon: <FaJava size={40} />, name: "Java" },
  { icon: <SiTailwindcss size={40} />, name: "Tailwind CSS" },
];

const Technologies = () => {
  const baseClass = "technologies";
  return (
    <div className={`${baseClass}__container`}>
      <h1 className={`${baseClass}__heading`}>Technologies</h1>
      <div className={`${baseClass}__icons`}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`${baseClass}__icon`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tech.icon}
            <span className={`${baseClass}__icon-name`}>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
