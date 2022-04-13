import React from 'react'

import "./button.scss";
const Button = (props) => {
  const { title, children } = props
  return (
    <button className='button'>{title} {children}</button>
  )
}

export default Button