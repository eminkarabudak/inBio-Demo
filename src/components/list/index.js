import React from 'react'
import ListBox from '../boxes/listBox'

import './list.scss'

const List = (props) => {
  const { title, subtitle, boxData } = props

  return (
    <div className='list'>
      <div className="list__head">
        <span className="list__subtitle">{subtitle}</span>
        <h3 className="list__title">{title}</h3>
      </div>
      <div className="list__box">
        <ListBox data={boxData} />
      </div>
    </div>
  )
}

export default List