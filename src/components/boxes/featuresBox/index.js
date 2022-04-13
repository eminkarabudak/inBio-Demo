import React, { Fragment } from 'react'
import { IoArrowForward } from "@react-icons/all-files/io5/IoArrowForward";

import './features-box.scss';

const FeaturesBox = (props) => {
  const { data } = props
  return (
    <Fragment>
      {
        data.map((item, index) => {
          return (
            <div key={index} className='features-box'>
              <div className="features-box__icon">
                <img src={item.icon} alt="" />
              </div>
              <div className="features-box__content">
                <h4 className="features-box__title">{item.title}</h4>
                <p className="features-box__description">{item.description}</p>
                <a href="#" className="features-box__more">
                  <IoArrowForward />
                </a>
              </div>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default FeaturesBox