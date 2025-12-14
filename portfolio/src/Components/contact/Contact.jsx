import React , {useRef, useState, useEffect} from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
export default function Contact() {
    const form = useRef();
    const message = useRef(" ");
  
  
    const [error , setError]= useState (false)
    const [success , setSuccess] = useState (false)
    useEffect(() => {
      if (success) {
        message.current.style.display = "block";
      }
    }, [success]);
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_ie99naq', 'template_xpmbvjm', form.current, 'wFrBqERY6bypH8-tK')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
          console.log(error.text);
          setError(true)
        });
       
    };
  return (
    <div id="contact">
        
       <div className="contact">
       <div className="message" ref={message}>
      <svg className="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>  {error && "Sending Failed" }  {success && "Sent successfully"}
 </div>
      <div className="contact-wrapper">
        <p className="contact-wrapper-title">Contact</p>
        <p className="contact-wrapper-description">Feel free to reach out to me for any questions or opportunities!</p>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <p className="contact-form-title">Email Me 🚀</p>
          <input className="contact-form-input" placeholder="Your Email" name="user_email" />
          <input className="contact-form-input" placeholder="Your Name" name="from_name" />
          <input className="contact-form-input" placeholder="Subject" name="user_subject" />
          <textarea className="contact-form-message" placeholder="Message" rows="4" name="message" />
          <button className="contact-form-submit" type="submit" value="Send" > Send </button>
        </form>
      </div>
    </div> 
    </div>
      
  )
}
