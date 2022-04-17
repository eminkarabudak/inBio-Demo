import React from 'react'
import SubTitle from '../title/subtitle'
import './list.scss'

const List = (props) => {
  const { title, subtitle, children } = props

  return (
    <div className='list'>
      <SubTitle subtitle={subtitle} title={title} />
      <div className="list__content">
        {children}
      </div>
    </div>
  )
}

export default List