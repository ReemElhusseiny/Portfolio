import React from 'react'
import Animation from "../Animation/Animation"
import "./about.css"

export default function About() {
    const pdf = "http://localhost:3000/Reem CV.pdf"
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
                        I'm proficient in JavaScript and React.js, I'm passionate about creating great user experiences,Throughout my journey, I have worked on various projects,  including responsive websites and full-stack website.
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
