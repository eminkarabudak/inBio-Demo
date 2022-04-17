import React, { Fragment } from 'react'

import './list-box.scss';

const ListBox = (props) => {

  const { data } = props
  return (
    <Fragment>
      {data.map((item, index) => {
        return (
          <div key={index} className='list-box'>
            <div className="list-box__top">
              <div className="list-box__titles">
                <h4 className="list-box__title">
                  {item.title}
                </h4>
                <span className="list-box__subtitle">{item.subtitle}</span>
              </div>
              <div className="list-box__rate">
                <span className="list-box__rated">{item.rate}</span>
              </div>
            </div>
            <div className="list-box__bottom">
              <p className="list-box__description">{item.description}</p>
            </div>
          </div>
        )
      })}

    </Fragment>

  )
}

export default ListBox