import React from 'react'
import Resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} download className='btn'>Download CV</a>
        <a href="#about" className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CTA