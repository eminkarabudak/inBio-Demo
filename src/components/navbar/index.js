import React, { useState, useRef } from 'react'
import Hamburger from '../hamburger';
import clickOutside from '../../hooks/clickOutside';
import Toggle from '../toggle';
import links from "../../assets/data/link.json"
import Menu from '../menu';
import Button from '../button';

import './navbar.scss';

const Navbar = () => {
  const [check, setCheck] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const ref = useRef();

  const changeBackground = () => {
    window.scrollY >= 120 ? setNavbar(true) : setNavbar(false)
  }
  window.addEventListener('scroll', changeBackground)
  const onChange = () => {
    setCheck(prev => !prev)
    setToggle(prev => !prev)
  }
  clickOutside(ref, () => {
    toggle ? onChange() : null

  });

  return (
    <div className={navbar ? 'navbar navbar--sticky' : 'navbar'} >
      <div className='navbar__logo'>
        <img src={require("../../assets/images/logo.png")} alt="logo" />
      </div>
      <Hamburger checked={check} onChange={onChange} className={`${toggle ? "toggle-menu-open" : ""}`} />
      <Toggle toggle={toggle} ref={ref} check={check} onChange={onChange} />
      <div className='navbar__content'>
        <Menu data={links} />
        <Button title={"Buy Now"} />
      </div>
    </div>
  )
}

export default Navbar