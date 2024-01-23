import React from 'react'
import "./projectcard.css"

export default function ProjectCard({project , setOpenModal }) {
  
  return (
    <div>
      
    <div className="cards" onClick={() => setOpenModal({state: true, project: project })} >
          <img className="cards-image" src={project.image}/>
          <div className="cards-tags">
              {project.tags?.map((tag, index) => (
              <div className="cards-tags-name">{tag}</div>
              ))}
          </div>
          <div className="cards-details">
              <p className="cards-title">{project.title}</p>
              <p className="cards-description">{project.description}</p>
          </div>
      </div>
      
    </div>
  )
}
