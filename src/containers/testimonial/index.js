import React from 'react'
import Carousel, { CarouselItem } from '../../components/carousel';
import TestimonialList from '../../components/list/testimonialList';
import Title from '../../components/title';

import './testimonial.scss';

const Testimonial = () => {
  return (
    <div className='testimonial section'>
      <Title title='Testimonial' subtitle='WHAT CLIENTS SAY' center />
      <Carousel >
        <CarouselItem>
          <TestimonialList
            boxTitle="Nevine Acontanza"
            boxSubtitle="Rainbow-Themes"
            boxDescription="Chief Operating Officer"
            boxImg="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png"
            cardTitle="Android App Development"
            cardDate="via Upwork - Mar 4, 2015 - Aug 30, 2021"
            cardRate={5}
            cardDescription="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris."
          />
        </CarouselItem>
        <CarouselItem>
          <TestimonialList
            boxTitle="Nevine Acontanza"
            boxSubtitle="Rainbow-Themes"
            boxDescription="Chief Operating Officer"
            boxImg="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png"
            cardTitle="Android App Development"
            cardDate="via Upwork - Mar 4, 2015 - Aug 30, 2021"
            cardRate={5}
            cardDescription="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris."
          />
        </CarouselItem>
        <CarouselItem>
          <TestimonialList
            boxTitle="Nevine Acontanza"
            boxSubtitle="Rainbow-Themes"
            boxDescription="Chief Operating Officer"
            boxImg="https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--1st.png"
            cardTitle="Android App Development"
            cardDate="via Upwork - Mar 4, 2015 - Aug 30, 2021"
            cardRate={5}
            cardDescription="Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
            sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
            hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris."
          />
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default Testimonial