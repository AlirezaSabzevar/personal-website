import "./Skills.css";
import { useEffect, useState } from "react";
import { getSkills } from "./api";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma
} from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

import { MdDevices } from "react-icons/md";
import { FaP } from "react-icons/fa6";




const skillIcons = {
  html5: <FaHtml5 />,
  html: <FaHtml5 />,

  css3: <FaCss3Alt />,
  css: <FaCss3Alt />,

  javascript: <SiJavascript />,
  react: <SiReact />,
  "react.js": <SiReact />,

  nextjs: <SiNextdotjs />,
  "next.js": <SiNextdotjs />,

  bootstrap: <FaBootstrap />,
  "tailwind css": <SiTailwindcss />,
  tailwind: <SiTailwindcss />,

  git: <FaGitAlt />,
  github: <FaGithub />,
  figma: <FaFigma />,

  typescript: <SiTypescript />,
  responsive: <MdDevices />,
  "responsive design": <MdDevices />,
};




// const skills = [
//   {
//     icon: <FaHtml5 />,
//     title: "HTML5"
//   },
//   {
//     icon: <FaCss3Alt />,
//     title: "CSS3"
//   },
//   {
//     icon: <SiJavascript />,
//     title: "JavaScript"
//   },
//   {
//     icon: <SiReact />,
//     title: "React.js"
//   },
//   {
//     icon: <SiNextdotjs />,
//     title: "Next.js"
//   },
//   {
//     icon: <FaBootstrap />,
//     title: "Bootstrap"
//   },
//   {
//     icon: <SiTailwindcss />,
//     title: "Tailwind CSS"
//   },
//   {
//     icon: <FaGitAlt />,
//     title: "Git"
//   },
//   {
//     icon: <FaGithub />,
//     title: "GitHub"
//   },
//   {
//     icon: <FaFigma />,
//     title: "Figma"
//   },
//   {
//     icon: <SiTypescript/>,
//     title: "Typescript"
//   },
//   {
//     icon: <MdDevices />,
//     title: "Responsive Design"
//   }
// ];


export default function Skills() {

  const [skills, setSkills] = useState([]);

    useEffect(() => {
      getSkills()
      .then((data) => {
        setSkills(data);
        console.log("✅ Skills API Response:", data);
      })
      .catch((error) => {
        console.error("❌ Skills API Error:", error);
      });
    }, []);



  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        <h2 className="skills-title">
          مهارت‌ها
          <span></span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.id}>
              <div className="skill-icon">
                {/* {skill.icon} */}
                {skillIcons[skill.title.toLowerCase()] || <MdDevices />}
              </div>

              <h3>{skill.title}</h3>
              
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};
