import React from 'react'

import './subtitle.scss';

const SubTitle = (props) => {
  const { title, subtitle } = props

  return (
    <div className="subtitle">
      <span className="subtitle__subtitle">{subtitle}</span>
      <h3 className="subtitle__title">{title}</h3>
    </div>
  )
}

export default SubTitle