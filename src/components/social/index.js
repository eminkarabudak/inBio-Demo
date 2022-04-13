import React from 'react'
import classNames from 'classnames';
// import Icon from '../Icon';

import './social.scss';

const SocialBox = (props) => {
  const { data, title, shadowNone, hoverNone } = props
  return (
    <div className={classNames('social', { 'hover-none': hoverNone })}>
      <p className="social__content">{title}</p>
      <ul className="social__list">
        {data.map((item, index) => {
          return (
            <li key={index} className="social__item">
              <a href="#" className={classNames('social__link', { 'shadow-none': shadowNone })}>
                <img src={(item.src)} alt={item.title} />
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