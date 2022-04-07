import React from 'react'
import classNames from "classnames";
import './hamburger.scss';

const Hamburger = ({ checked, onChange, className }) => {
  return (
    <div className={classNames('hamburger', className)}>
      <input checked={checked} className="hamburger__checkbox" type="checkbox" onChange={onChange} />
      <div className="hamburger__lines">
        <span className="hamburger__line hamburger__line--1"></span>
        <span className="hamburger__line hamburger__line--2"></span>
        <span className="hamburger__line hamburger__line--3"></span>
      </div>
    </div>
  )
}

export default Hamburger