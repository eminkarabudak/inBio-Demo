import React, { useState, useRef } from 'react'
import classNames from 'classnames';
import Hamburger from '../hamburger';
import clickOutside from '../../hooks/clickOutside';
import SocialBox from '../social';

import './navbar.scss';

const Navbar = () => {
  const [check, setCheck] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const ref = useRef();

  const changeBackground = () => {
    window.scrollY >= 200 ? setNavbar(true) : setNavbar(false)
  }
  window.addEventListener('scroll', changeBackground)
  const onChange = () => {
    setCheck(prev => !prev)
    setToggle(prev => !prev)
  }
  clickOutside(ref, () => {
    toggle ? onChange() : null

  });
  const links = [
    {
      className: true,
      to: '/',
      title: 'Home'
    },
    {
      to: '/Features',
      title: 'Features'
    },
    {
      to: '/Portfolio',
      title: 'Portfolio'
    },
    {
      to: '/Resume',
      title: 'Resume'
    },
    {
      to: '/Clients',
      title: 'Clients'
    },
    {
      to: '/Pricing',
      title: 'Pricing'
    },
    {
      to: '/Blog',
      title: 'Blog'
    },
    {
      to: '/Contact',
      title: 'Contact'
    }

  ]

  const social = [
    {
      title: "facebook",
      src: require('../../assets/images/icons/facebook.svg')
    },
    {
      title: 'instagram',
      src: require('../../assets/images/icons/instagram.svg')
    },
    {
      title: 'linkedin',
      src: require('../../assets/images/icons/linkedin.svg')
    }
  ]

  const Menu = () => {
    return (
      <ul className='navbar__list'>
        {
          links.map((item, index) => {
            return (<li key={index} className='navbar__item'>
              <a className={classNames('navbar__link', { 'current': item.className })}>{item.title}</a>
            </li>)
          })
        }
      </ul>
    )
  }
  return (
    <div className={navbar ? 'navbar active' : 'navbar'} >
      <div className='navbar__logo'>
        <img src={require("../../assets/images/logo.png")} alt="logo" />
      </div>
      <Hamburger checked={check} onChange={onChange} className={`${toggle ? "toggle-menu-open" : ""}`} />
      <div className={`toggle ${toggle ? "toggle-menu-open" : ""}`} >
        <div className='toggle__inner' ref={ref} >
          <div className='toggle__head'>
            <div className="toggle__head-up">
              <div className="navbar__logo">
                <img src={require('../../assets/images/logos-circle.png')} alt="logos-circle" />
              </div>
              <Hamburger checked={check} onChange={onChange} className="toggle__close" />
            </div>
            <p className="toggle__content">Inbio is a personal portfolio template. You can customize all.</p>
          </div>
          <div className="toggle__mid">
            <Menu />
          </div>
          <div className="toggle__footer">
            <SocialBox data={social} title='FIND WITH ME' shadowNone />
          </div>
        </div>
      </div>
      <div className='navbar__content'>
        <Menu />
        <button className='navbar__button'>Buy Now</button>
      </div>
    </div>
  )
}

export default Navbar