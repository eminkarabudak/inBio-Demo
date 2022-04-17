import React from 'react'
import classNames from 'classnames'

import './menu.scss'

const Menu = ({ data }) => {
  return (
    <ul className='menu__list'>
      {data.map((item, index) => {
        return (
          <li key={index} className='menu__item'>
            <a className={classNames('menu__link', { 'current': item.className })}>{item.title}</a>
          </li>)
      })
      }
    </ul>
  )
}

export default Menu