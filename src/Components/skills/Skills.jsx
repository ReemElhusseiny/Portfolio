import React , {useEffect,useRef} from 'react'
import { motion  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./skills.css"
export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const skills = [
  {
    title: "Frontend Fundamentals",
    skills: [
      {
        name: "HTML",
        image:
          "html-5.png",
      },
      {
        name: "CSS",
        image:
          "css-3.png",
      },
      {
        name: "SASS",
        image: "./sass.png",
      },
      {
        name: "JavaScript",
        image:
          "js.png",
      },
      {
        name: "TypeScript",
        image:
          "typescript.png",
      },
      {
        name: "Tailwind CSS",
        image:
          "tailwind.png",
      },
    ],
  },
  {
    title: "React & Frontend Tools",
    skills: [
      {
        name: "React",
        image:
          "react.png",
      },
      {
        name: "React Query",
        image:
          "React-Query.png",
      },
      {
        name: "Redux Toolkit",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
      {
        name: "Zustand",
        image:
          "zustand.png",
      },
      {
        name: "Context API",
        image:
          "react.png",
      },
      {
        name: "REST APIs",
        image: "./rest-apis.png",
      },
      {
        name: "Axios",
        image: "./axios.svg",
      },
      {
        name: "NextJs",
        image: "./Next.png",
      },
    ],
  },
];
  return (
    <div>
        <div className="skills" id="skills">
      <div className="skills-wrapper">
        <p className="skills-title">Skills</p>
        <p className="skills-description">Here are some of my skills on which I have been working on.
        </p>
        <div className="skills-container" >
          {skills.map((skill,index) => (
                              <motion.div
                              ref={ref}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    transition={{ duration: 2, delay: index * 0.2 }}
                      className={`skill-box box-transition-${index}`}  key={index}>
              <p className="skill-box-title">{skill.title}</p>
              <div className="skill-box-list">
                {skill.skills.map((item) => (
                  <div className="skill-box-items">
                    <img className="skill-box-img" src={item.image}/>
                    {item.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
    </div>
  )
}
