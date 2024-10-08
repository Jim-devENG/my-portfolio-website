import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xwvmd5t', 'template_95rucjt', form.current, 'OTD3d5y-RY_6sucEM')

    e.target.reset()
  };

  return( 
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon"/>
          <h4>Email</h4>
          <h5>jamesenietan@gmail.com</h5>
          <a href="mailto:enietanjamie@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon"/>
          <h4>Messenger</h4>
          <h5>Jimmy</h5>
          <a href="https://m.me/jimmydebillion" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon"/>
          <h4>Whatsapp</h4>
          <h5>+2349035855616</h5>
          <a href="https://api.whatsapp.com/send?phone+2349035855616" target="_blank" rel="noopener noreferrer">Send a message</a>
        </article> 
      </div>
      {/* EMD OF CONTACT OPTION */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required /> 
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
    </div>
  </section>
)
};

export default Contact;
