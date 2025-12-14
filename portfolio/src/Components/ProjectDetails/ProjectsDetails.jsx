import React from 'react'
import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import "./projectdetails.css"


export default function ProjectsDetails({ openModal, setOpenModal }) {

   
    const project = openModal?.project;
  return (
    <div>
         <Modal open={true} onClose={() => setOpenModal({ state: false, project: null  })}>
      
            < div className="modal">
                <div  className="modal-wrapper">
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                
                    
                    <img  className="modal-image" src={project?.image} />
                    <p  className="modal-title">{project?.title}</p>
                    <div  className="modal-tags">
                        {project?.tags.map((tag) => (
                            <div  className="modal-tags-name">{tag}</div>
                        ))}
                    </div>
                    <p className="modal-description">{project?.description}</p>
                    
                 
                    <div  className="modal-buttonsgroup">
                        <a  className="modal-button"  href={project?.github} target='new'>View Code</a>
                       
          <a className="modal-button" href={project?.website} target="new">
            View Live App
          </a>

                    </div>
                   
                </div>
              
            </div>
          

        </Modal>
       </div>
  )
}
