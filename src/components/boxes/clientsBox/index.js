import React, { Fragment } from 'react'

import './clients-box.scss'

const ClientsBox = (props) => {
  const { data } = props

  return (
    <Fragment>
      {
        data.map((item, index) => {
          return (
            <div key={index} className='clients-box'>
              <div className="clients-box__logo">
                <img src={item.src} alt={item.clientName} />
              </div>
              <div className="clients-box__description">
                <span className='clients-box__name'>{item.clientName}</span>
              </div>
            </div>
          )
        })
      }
    </Fragment>

  )
}

export default ClientsBox