import React, { useState } from 'react'

import './progress-bar.scss';

const ProgressBar = (props) => {
  const { title, width, value } = props
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${value}%`
    }

    setStyle(newStyle);
  }, 200);

  return (
    <div className='progress-bar'>
      <h6 className="progress-bar__title">{title}</h6>
      <div className="progress-bar__content" style={{ width: `${width}px` }}>
        <div className="progress-bar__progress" style={style}>
          <span className="progress-bar__rate">{value}%</span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar