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
                    <p style={{ whiteSpace: "pre-line" }} className="modal-description">{project?.description}</p>
                    {project.title === 'Subscription Billing System: Stripe + Supabase' && ( 
                        <div style={{display: 'flex', gap: '5px'}}>
                        <p>Demo: </p>
                        <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="modal-link"
    >
      Watch the demo
    </a>
                         </div>
                    )
}
               {project.title === 'Admin Dashboard & Merchant Dashboard' ? <div style={{ display: 'flex', gap: '10px'}}>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('dashboard.png')} src='dashboard.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}}  onClick={() => handleClick('details.png')} src='details.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('history.png')} src='history.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('BulkUpdate.png')} src='BulkUpdate.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('assignCaptain.png')} src='assignCaptain.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('export.png')} src='export.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('perimission.png')} src='perimission.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('distance.png')} src='distance.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('analytics1.png')} src='analytics1.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('analytics2.png')} src='analytics2.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('download.png')} src='download.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('uploadOrders.png')} src='uploadOrders.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('trackOrder.png')} src='trackOrder.png' alt='' width='50px' height='50px'/>

                 </div> : project.title === 'Dashboard' ? <div style={{ display: 'flex', gap: '10px'}}>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('table.png')} src='table.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}}  onClick={() => handleClick('step1.png')} src='step1.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('step2.png')} src='step2.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('cards.png')} src='cards.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('1.png')} src='1.png' alt='' width='50px' height='50px'/>

                 </div> : project.title === 'Interviewer website' ? <div style={{ display: 'flex', gap: '10px'}}>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('HomeInterviwer.png')} src='HomeInterviwer.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('signUp.png')} src='signUp.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('services.png')} src='services.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}}  onClick={() => handleClick('callSetupInterviwer.png')} src='callSetupInterviwer.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('callInterviwer.png')} src='callInterviwer.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('scheduleInterviwer.png')} src='scheduleInterviwer.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('scheduleFormInterviwer.png')} src='scheduleFormInterviwer.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('recordingsInterviwer.png')} src='recordingsInterviwer.png' alt='' width='50px' height='50px'/>
 <img style={{cursor: 'pointer'}} onClick={ () => handleClick('reviewCandidate.png')} src='reviewCandidate.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('reviewCandidate2.png')} src='reviewCandidate2.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('Homecandidate.png')} src='Homecandidate.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('interviewComment.png')} src='interviewComment.png' alt='' width='50px' height='50px'/>
                 </div> : project.title === 'Payment stripe' ? <div style={{ display: 'flex', gap: '10px'}}>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('signupStripe.png')} src='signupStripe.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('loginStripe.png')} src='loginStripe.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('plans.png')} src='plans.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}}  onClick={() => handleClick('checkout.png')} src='checkout.png' alt='' width='50px' height='50px'/>
                    <img style={{cursor: 'pointer'}} onClick={ () => handleClick('profile.png')} src='profile.png' alt='' width='50px' height='50px'/>
                 </div> : ''}
                    <div  className="modal-buttonsgroup">
                        { project.title === 'Admin Dashboard & Merchant Dashboard' || project.title === 'Dashboard' ? <a className="modal-button">View Code</a> : <a className="modal-button"  href={project?.github} target='new'>View Code</a>}
      
                        { project.title === 'Admin Dashboard & Merchant Dashboard' || project.title === 'Dashboard' ? <a className="modal-button">View Live App</a> :
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
