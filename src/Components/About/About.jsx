/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Animation from "../Animation/Animation"
import "./about.css"

export default function About() {
    const pdf = "/ReemElhusseiny.pdf"
    const download =(url)=>{
      const aTag = document.createElement("a")
      aTag.href=url
      aTag.setAttribute("download" , pdf)
      document.body.appendChild(aTag)
      aTag.click();
      aTag.remove();
    }
  return (
    <div id="about">
        <div className="hero-container">
            <div className="hero-container-bg">
                <Animation/>
            </div>
            <div className="hero-container-inner">
                <div id="left" className="hero-container-inner-left">
                <p className="hero-container-inner-left-title">Hi, I am  <br /> Reem Elhussieny</p>
                             <p className="hero-container-inner-left-title-loop"> I am a <span className="frontend">Frontend developer</span></p>
                        <p className="hero-container-inner-left-description"> 
                        I graduated from ITI and worked at Weevo, continuously improving my skills as a frontend developer. Proficient in JavaScript and React.js, I'm passionate about creating great user experiences. I've worked on various projects, including responsive and full-stack websites.
                        {/* I am a passionate Frontend Developer with a solid foundation from graduating at the ITI Institute. My professional journey began at Weevo, continuously improving my skills as a frontend developer. I am proficient in JavaScript and React.js,Throughout my career, I have had the opportunity to work on a variety of projects, including responsive websites and full-stack applications, which have deepened my understanding of both frontend and backend technologies. I am committed to delivering high-quality, and am always eager to take on new challenges to further enhance my skills. */}
                        {/* I'm proficient in JavaScript and React.js, I'm passionate about creating great user experiences,Throughout my journey, I have worked on various projects,  including responsive websites and full-stack website. */}
   </p>
                        <button className="hero-container-inner-left-download" onClick={()=>{download( pdf )}}> Download Resume</button>


                </div>
                <div  id="Right" className="hero-container-inner-right">

                <img
      className="hero-container-inner-right-image"
      src="/reem.jpeg"
      alt="hero-image"
    />
</div>
            </div>
        </div>
    </div>
  )
}
