import React from 'react'
import Icon from '../Icon/Icon';

import './social.scss';

const SocialBox = ({ data }) => {
  return (
    <div className="social">
      <ul className="social__list">
        {data.map((item, index) => {
          return (
            <li key={index} className="social__item">
              <a href="#" className="social__link">
                <img src={item.src} alt={item.title} />
                <Icon icon={`${item.title}`} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default SocialBox