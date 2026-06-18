import "./Skills.css";

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





const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML5"
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS3"
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript"
  },
  {
    icon: <SiReact />,
    title: "React.js"
  },
  {
    icon: <SiNextdotjs />,
    title: "Next.js"
  },
  {
    icon: <FaBootstrap />,
    title: "Bootstrap"
  },
  {
    icon: <SiTailwindcss />,
    title: "Tailwind CSS"
  },
  {
    icon: <FaGitAlt />,
    title: "Git"
  },
  {
    icon: <FaGithub />,
    title: "GitHub"
  },
  {
    icon: <FaFigma />,
    title: "Figma"
  },
  {
    icon: <SiTypescript/>,
    title: "Typescript"
  },
  {
    icon: <MdDevices />,
    title: "Responsive Design"
  }
];


export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-container">

        <h2 className="skills-title">
          مهارت‌ها
          <span></span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.title}</h3>
              
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};
