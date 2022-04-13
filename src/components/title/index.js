import React from 'react'

import "./title.scss";

const Title = (props) => {
  const { subtitle, title } = props
  return (
    <div className="title">
      <span className="title__subtitle">{subtitle}</span>
      <h2 className="title__title">{title}</h2>
    </div>
  )
}

export default Title