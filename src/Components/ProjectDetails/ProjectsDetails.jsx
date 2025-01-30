/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, {useRef} from 'react'
import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';
import "./projectdetails.css"


export default function ProjectsDetails({ openModal, setOpenModal }) {
 const image = useRef();
   
    const project = openModal?.project;
    const handleClick = (img) => {
        if (image.current) {
            image.current.src = img; // Update the src of the image reference
        }
    };
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
                
                    
                    <img ref={image} className="modal-image" src={project?.image} />
                    <p  className="modal-title">{project?.title}</p>
                    <div  className="modal-tags">
                        {project?.tags.map((tag) => (
                            <div  className="modal-tags-name">{tag}</div>
                        ))}
                    </div>
                    <p className="modal-description">{project?.description}</p>
                    
                 {project.title === 'Admin Dashboard' ? <div style={{ display: 'flex', gap: '10px'}}>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('dashboard.png')} src='dashboard.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}}  onClick={() => handleClick('details.png')} src='details.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('create.png')} src='create.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('map.png')} src='map.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('distance.png')} src='distance.png' alt='' width='50px' height='50px'/>

                 </div> : project.title === 'Dashboard' ? <div style={{ display: 'flex', gap: '10px'}}>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('table.png')} src='table.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}}  onClick={() => handleClick('step1.png')} src='step1.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('step2.png')} src='step2.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('cards.png')} src='cards.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('1.png')} src='1.png' alt='' width='50px' height='50px'/>

                 </div> : ''}
                    <div  className="modal-buttonsgroup">
                        { project.title === 'Admin Dashboard' || project.title === 'Dashboard' ? <a className="modal-button">View Code</a> : <a className="modal-button"  href={project?.github} target='new'>View Code</a>}
      
                        { project.title === 'Admin Dashboard' || project.title === 'Dashboard' ? <a className="modal-button">View Live App</a> :
          <a className="modal-button" href={project?.website} target="new">
            View Live App
          </a> }

                    </div>
                   
                </div>
              
            </div>
          

        </Modal>
       </div>
  )
}
