import React, { forwardRef } from 'react'
import Hamburger from '../hamburger';
import Menu from '../menu';
import SocialBox from '../social';
import social from "../../assets/data/social.json"
import links from "../../assets/data/link.json"
import bodyPositionFixed from '../../hooks/bodyPositionFixed';

import './toggle.scss';

const Toggle = forwardRef((props, ref) => {
  const { toggle, check, onChange } = props

  bodyPositionFixed(toggle);

  return (
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
          <Menu data={links} />
        </div>
        <div className="toggle__footer">
          <SocialBox data={social} title='FIND WITH ME' shadowNone />
        </div>
      </div>
    </div>
  )
})

export default Toggle