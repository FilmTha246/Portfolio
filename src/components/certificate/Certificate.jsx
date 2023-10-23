import React from "react";
import './certificate.css';
import Cert1 from '../../assets/cert1.jpg';
import Cert2 from '../../assets/cert2.jpg';
import Cert3 from '../../assets/cert3.jpg';
import Cert4 from '../../assets/cert4.jpg';
import Cert5 from '../../assets/cert5.jpg';
import Cert6 from '../../assets/cert6.jpg';
import Cert7 from '../../assets/cert7.jpg';
import Cert8 from '../../assets/cert8.jpg';
import Cert9 from '../../assets/cert9.jpg';

const Certificate = () => {
    return (
      <section id='certificate'>
        <h5>I have studied</h5>
        <h2>Certificate</h2>
  
        <div className="container certificate__container">
          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert1} alt="" />
            </div>
            <h3>junior software Developer Program(Cohort3)</h3>
            <p>Generation Thailand</p>
          </article>
  
          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert2} alt="" />
            </div>
            <h3>Learn How To Code Course</h3>
            <p>codecademy</p>
          </article>
  
          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert3} alt="" />
            </div>
            <h3>Code Foundations Skill Path</h3>
            <p>codecademy</p>
          </article>

          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert4} alt="" />
            </div>
            <h3>Learn HTML Course</h3>
            <p>codecademy</p>
          </article>

          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert5} alt="" />
            </div>
            <h3>Build a Website with HTML, CSS and GitHub Pages Skill Path</h3>
            <p>codecademy</p>
          </article>

          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert6} alt="" />
            </div>
            <h3>Learn JavaScript Course</h3>
            <p>codecademy</p>
          </article>

          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert9} alt="" />
            </div>
            <h3>SQL Crash Course</h3>
            <p>DataRockie School</p>
          </article>

          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert7} alt="" />
            </div>
            <h3>Cultivating a Growth Mindset</h3>
            <p>LinkedIn LEARNING</p>
          </article>

          <article className="certificate__item">
            <div className="certificate__item-image">
              <img src={Cert8} alt="" />
            </div>
            <h3>Leading like a Futurist</h3>
            <p>LinkedIn LEARNING</p>
          </article>
        </div>
      </section>
    )
  }
  
  export default Certificate