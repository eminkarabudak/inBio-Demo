import React from 'react'
import classNames from 'classnames'

import "./button.scss";

const Button = (props) => {
  const { title, children, circular, transform, onClick, className, hover } = props
  return (
    <button onClick={onClick} className={classNames('button', className, { 'button--circular': circular, 'button--transform': transform, 'button--hover': hover })}>{title} {children}</button>
  )
}

export default Button