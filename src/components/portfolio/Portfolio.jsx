import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1-1.jpg';
import IMG2 from '../../assets/portfolio2.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>ColmarAcademy</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/FilmTha246?tab=repositories" className='btn' target="_blank">Github</a>
            <a href="https://filmtha246.github.io/ColmarAcademy/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Codecademy-Jammming</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/FilmTha246?tab=repositories" className='btn' target="_blank">Github</a>
            <a href="https://codecademy-jammming.vercel.app/" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio