import React from 'react'
import classNames from 'classnames'

import "./button.scss";

const Button = (props) => {
  const { title, children, circular, transform, onClick, className } = props
  return (
    <button onClick={onClick} className={classNames('button', className, { 'button--circular': circular, 'button--transform': transform })}>{title} {children}</button>
  )
}

export default Button