import React  from 'react'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import {Link } from 'react-router-dom'
import "./navbar.css"
export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
 
    
  return (
    <div>
       <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-container-logo">
            <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <span className="navbar-container-logo-name">Portfolio</span>
          </a>
            </div>
            <div className="navbar-icon">
            <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
            </div>
           <div className="navbar-menu">
          <a  className="navbar-menu-items"  href="#about">About</a>
          <a className="navbar-menu-items" href="#skills">Skills</a>
          <a  className="navbar-menu-items"  href='#projects'>Projects</a>
          <a  className="navbar-menu-items"  href='#contact'>Contact</a>
           </div>

        <div className="button-container">
       <a  className="button-container-github" href="https://github.com/ReemElhusseiny">Github Profile</a>
        </div>
        {
          isOpen &&
          <div className="navbar-icon-mobile" isOpen={isOpen}>
            <a className="navbar-icon-mobile-link" href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</a>
            <a className="navbar-icon-mobile-link" href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</a>
            <a className="navbar-icon-mobile-link" href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</a>
            <a className="navbar-icon-mobile-link" href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</a>
              <a className="button-container-github"  href="https://github.com/ReemElhusseiny" style={{padding: '10px 16px',background: "#854CE6", color: 'white',width: 'max-content'}}> Github Profile</a> 
          </div>
        }
        </div>

      </nav>
    </div>
  )
}
