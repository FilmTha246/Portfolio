import React from 'react'
import './about.css';
import ME from '../../assets/about.gif'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>0-1 Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>
          I believe learning is the way to new opportunities and practice is the key to the success. 
          Therefore, I'm always learning new things and practicing myself for a good software developer in the future.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About