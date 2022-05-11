import React from 'react'

import './testimonial-card.scss';

const TestimonialCard = (props) => {
  const { title, date, rate, description } = props

  return (
    <div className='testimonial-card'>
      <div className="testimonial-card__head">
        <div className="testimonial-card__titles">
          <h3 className="testimonial-card__title">{title}</h3>
          <span className="testimonial-card__date">{date}</span>
        </div>
        <div className="testimonial-card__rate">
          {Array.from(Array(rate), (_, i) =>
            <img key={i} src='https://rainbowit.net/html/inbio/assets/images/icons/rating.png' alt="" />
          )}
        </div>
      </div>
      <p className="testimonial-card__description">{description}</p>
      <div>

      </div>
    </div>
  )
}

export default TestimonialCard