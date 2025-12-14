import React from 'react'
import ProjectCard from "../ProjectCard/ProjectCard"
import "./projects.css"
import { projects } from '../ProjectData/ProjectData'
export default function Projects({openModal,setOpenModal}) {
 
  return (
    <div>
        <div id="projects" className="projects">
    <div className="projects-wrapper">
      <p className="projects-title">Projects</p>
      <p className="projects-description">
        I have worked on a wide range of projects. Here are some of my projects.
      </p>
      <div className="container">
      {projects
            .map((project) => (
              <ProjectCard  project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
    </div>
  </div>
  </div>
</div>
  )
}
