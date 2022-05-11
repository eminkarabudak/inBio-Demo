import React from 'react'
import classNames from 'classnames';

import "./title.scss";

const Title = (props) => {
  const { subtitle, title, center } = props
  return (
    <div className={classNames('title', { 'title__center': center })}>
      <span className="title__subtitle">{subtitle}</span>
      <h2 className="title__title">{title}</h2>
    </div>
  )
}

export default Title