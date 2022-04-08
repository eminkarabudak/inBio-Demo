import React from 'react'
import classNames from 'classnames';
// import Icon from '../Icon/Icon';

import './social.scss';

const SocialBox = ({ data, title, shadowNone, hoverNone }) => {

  return (
    <div className={classNames('social', { 'shadow-none': shadowNone, 'hover-none': hoverNone })}>
      <p className="social__content">{title}</p>
      <ul className="social__list">
        {data.map((item, index) => {
          return (
            <li key={index} className="social__item">
              <a href="#" className="social__link">
                <img src={item.src} alt={item.title} />
                {
                  // <Icon icon={`${item.title}`} />
                }
              </a>
            </li>
          )
        })}
      </ul>
    </div>

  )
}

export default SocialBox