import React from 'react'
import TestimonialBox from '../../boxes/testimonialBox';
import TestimonialCard from '../../cards/testimonialCard';

import './testimonial-list.scss';

const TestimonialList = (props) => {
  const { boxTitle, boxSubtitle, boxDescription, boxImg, cardTitle, cardDate, cardRate, cardDescription } = props
  return (
    <div className='testimonial-list'>
      <div className="testimonial-list__box">
        <TestimonialBox title={boxTitle} subtitle={boxSubtitle} description={boxDescription} img={boxImg} />
      </div>
      <div className="testimonial-list__card">
        <TestimonialCard title={cardTitle} date={cardDate} rate={cardRate} description={cardDescription} />
      </div>
    </div>
  )
}

export default TestimonialList