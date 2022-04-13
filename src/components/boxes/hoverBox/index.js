import React, { Fragment } from 'react'
import { BiHeart } from "@react-icons/all-files/bi/BiHeart"
import { ImArrowUpRight2 } from "@react-icons/all-files/im/ImArrowUpRight2"

import "./hover-box.scss";

const HoverBox = (props) => {
  const { data, onClick } = props

  return (
    <Fragment>
      {
        data.map((item, index) => {
          return (
            <div key={index} className='hover-box' onClick={onClick}>
              <div className="hover-box__img">
                <img src={item.img} alt="" />
              </div>
              <div className="hover-box__content">
                <h4 className="hover-box__title">{item.title}</h4>
                <span className="hover-box__counter">
                  <BiHeart />
                  {item.counter}
                </span>
                <p className="hover-box__description"></p>
              </div>
              <h4 href="#" className="hover-box__more">
                {item.more}
                <ImArrowUpRight2 />
              </h4>
            </div>
          )
        })
      }
    </Fragment>
  )
}

export default HoverBox