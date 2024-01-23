import React  from 'react'
import "./skills.css"
export default function Skills() {

  

    const skills = [
      
        {
          title: "Frontend",
          skills: [
            {
                name: "HTML",
                image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
              },
              {
                name: "CSS",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
              },
              {
                name: "SASS",
                image: "./sass.png"
              },
              {
                name: "JavaScript",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
              },
            {
              name: "React Js",
              image:
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
            },
            {
              name: "Redux",
              image:
                "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
            },
            
            
           
            {
              name: "Bootstrap",
              image:
                "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
            },
        
          ],
        },
        {
          title: "Backend",
          skills: [
            {
                name: "MySQL",
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
              },
              {
                name: "Postgresql",
                image: "https://www.postgresql.org/media/img/about/press/elephant.png",
              },
              {
                name: "Python",
                image:
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
              },
            {
              name: "Django",
              image: "/django.png",
            },
            {
              name: "Flask",
              image:
                "/flask.jpg",
            },
           
          ],
        },
    ]
  return (
    <div>
        <div className="skills" id="skills">
      <div className="skills-wrapper">
        <p className="skills-title">Skills</p>
        <p className="skills-description">Here are some of my skills on which I have been working on.
        </p>
        <div className="skills-container" >
          {skills.map((skill,index) => (
            <div className={`skill-box box-transition-${index}`} key={index}  >
              <p className="skill-box-title">{skill.title}</p>
              <div className="skill-box-list">
                {skill.skills.map((item) => (
                  <div className="skill-box-items">
                    <img className="skill-box-img" src={item.image}/>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    </div>
  )
}
