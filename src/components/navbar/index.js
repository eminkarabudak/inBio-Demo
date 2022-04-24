import React, { useState, useRef, Fragment, useEffect } from 'react'
import Hamburger from '../hamburger';
import clickOutside from '../../hooks/clickOutside';
import Toggle from '../toggle';
import links from "../../assets/data/link.json"
import Menu from '../menu';
import Button from '../button';
import { ImArrowUp2 } from "react-icons/im";
import './navbar.scss';

const Navbar = () => {
  const [check, setCheck] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [scrollButtonShow, setscrollButtonShow] = useState(false)
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();

  const changeBackground = () => {
    window.scrollY >= 120 ? setNavbar(true) : setNavbar(false)

  }
  window.addEventListener("scroll", changeBackground);

  const onChange = () => {
    setCheck(prev => !prev)
    setToggle(prev => !prev)
  }
  clickOutside(ref, () => {
    toggle ? onChange() : null

  });

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    setscrollButtonShow(false)
  }

  const logit = () => {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.pageYOffset > 0 ? setscrollButtonShow(false) : setscrollButtonShow(true)
    };
  }, [window.pageYOffset]);

  return (
    <Fragment>
      <div className={navbar ? 'navbar navbar--sticky' : 'navbar'} >
        <div className='navbar__logo'>
          <img src={require("../../assets/images/logo.png")} alt="logo" />
        </div>
        <Hamburger checked={check} onChange={onChange} className={`${toggle ? "toggle-menu-open" : ""}`} />
        <Toggle toggle={toggle} ref={ref} check={check} onChange={onChange} />
        <div className='navbar__content'>
          <Menu data={links} />
          <Button title={"Buy Now"} transform />
        </div>
      </div>
      <Button className={`on-scroll-top-button ${scrollButtonShow ? 'on-scroll-top-button--hide' : ''}`} circular onClick={onScrollTop} children={<ImArrowUp2 />} />
    </Fragment>

  )
}

export default Navbar