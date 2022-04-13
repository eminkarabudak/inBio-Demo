import React, { Fragment } from 'react'
import Button from '../../button'
import { IoClose } from "react-icons/io5";

import './modal-box.scss';

const ModalBox = (props) => {

  const { data, onClose } = props

  return (
    <Fragment>
      {
        data.map((item, index) => {
          return (
            <div key={index} className='modal-box'>
              <div className="modal-box__close" onClick={onClose}>
                <IoClose />
              </div>
              <div className="modal-box__top">
                <div className="modal-box__img">
                  <img src={item.img} alt="" />
                </div>
              </div>
              <div className="modal-box__bottom">
                <div className="modal-box__content">
                  <span className="modal-box__subtitle">{item.subtitle}</span>
                  <h3 className="modal-box__title">{item.title}</h3>
                  {item.description.map((item, index) => {
                    return (
                      <p key={index} className="modal-box__description">{item.paragraph}</p>
                    )
                  })}
                  <div className="modal-box__button">
                    {item.button.map((item, index) => {
                      return (
                        <Button key={index} title={item.buttonTitle} children={item.buttonIcon} />

                      )
                    })
                    }
                  </div>

                </div>
              </div>
            </div>
          )
        })
      }
    </Fragment>

  )
}

export default ModalBox