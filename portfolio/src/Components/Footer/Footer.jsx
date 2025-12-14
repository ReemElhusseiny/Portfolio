import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./footer.css"
export default function Footer() {
  return (
    <div>  
          <div className="footer">
    <div className="footer-wrapper">
      <p className="footer-wrapper-title">Reem Elhusseiny</p>
      <div className="footer-nav">
      <a  className="footer-nav-items"  href="#about">About</a>
          <a className="footer-nav-items" href="#skills">Skills</a>
          <a  className="footer-nav-items"  href='#projects'>Projects</a>
          <a  className="footer-nav-items"  href='#contact'>Contact</a>
      </div>
      <div className="socialmedia">
        <a className="socialmedia-icon" href="mailto:reemelhusseiny.1999@gmail.com?subject=Hiring" target="display"><SiGmail /></a>
        <a className="socialmedia-icon" href="https://github.com/ReemElhusseiny" target="display"><FaGithub/></a>
        <a className="socialmedia-icon" href="https://www.linkedin.com/in/reem-elhusseiny-aa81a4190?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="display"><CiLinkedin /></a>
      </div>
     

    </div>
  </div></div>
  )
}
