import React from 'react'
import './contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>thnp.chaiyawijit@gmail.com</h5>
            <a href="mailto:thnp.chaiyawijit@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Thanaporn Chaiyawijit</h5>
            <a href="https://www.linkedin.com/in/thanaporn-chaiyawijit-61492924a/" target='_blank' rel="noreferrer">Click</a>
          </article>
          <article className="contact__option">
            <FaGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>FilmTha246</h5>
            <a href="https://github.com/FilmTha246" target='_blank' rel="noreferrer">Click</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact