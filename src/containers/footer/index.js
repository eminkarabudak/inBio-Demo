import React from 'react'

import './footer.scss';

const Footer = () => {
  return (
    <div className='footer section'>
      <div className="footer__content">
        <div className="footer__logo">
          <img src={require('../../assets/images/logo-vertical.png')} alt="" />
        </div>
        <div className="footer__description">
          <p>© 2022. All rights reserved by <a href="#">Rainbow-Themes.</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer