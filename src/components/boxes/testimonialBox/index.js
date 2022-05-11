import React from 'react'

import './testimonial-box.scss';

const TestimonialBox = (props) => {
  const { onClick, img, title, description, subtitle } = props
  return (
    <div className='testimonial-box' onClick={onClick}>
      <div className="testimonial-box__img">
        <img src={img} alt="" />
      </div>
      <div className="testimonial-box__content">
        <span className="testimonial-box__subtitle">
          {subtitle}
        </span>
        <h4 className="testimonial-box__title">{title}</h4>
        <p className="testimonial-box__description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default TestimonialBox