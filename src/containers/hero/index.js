import React from 'react'
import SocialBox from '../../components/social';
import social from '../../assets/data/social'

import './hero.scss';

const Hero = () => {
  // const social = [
  //   {
  //     title: "facebook",
  //     src: require('../../assets/images/icons/facebook.svg')
  //   },
  //   {
  //     title: 'instagram',
  //     src: require('../../assets/images/icons/instagram.svg')
  //   },
  //   {
  //     title: 'linkedin',
  //     src: require('../../assets/images/icons/linkedin.svg')
  //   }
  // ]

  const skill = [
    {
      title: "facebook",
      src: require('../../assets/images/icons-01.png')
    },
    {
      title: 'instagram',
      src: require('../../assets/images/icons-02.png')
    },
    {
      title: 'linkedin',
      src: require('../../assets/images/icons-03.png')
    }
  ]
  const dynamicText = [
    {
      title: "Developer.",
    },
    {
      title: 'Professional Coder.',
    },
    {
      title: 'Developer.',
    }
  ]

  return (
    <div className='hero section'>
      <div className="hero__left-side">
        <div className="hero__subtitle">WELCOME TO MY WORLD</div>
        <h1 className="hero__title">Hi, I’m
          <span className='hero__title--primary'> Jone Lee</span>
          <br />
          <div className="hero__text-wrapper">
            <span className='span-center' >a</span>
            <ul className="hero__dynamic-txts">
              {dynamicText.map((item, index) => {
                return (
                  <li key={index} className='hero__list'>
                    <span className='hero__item'>{item.title}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </h1>
        <p className="hero__description">
          I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
        <div className="hero__social">
          <SocialBox data={social} title="FIND WITH ME" />
          <SocialBox data={skill} title="BEST SKILL ON" hoverNone />
        </div>
      </div>
      <div className="hero__right-side">
        <div className="hero__box">
          <div>
            <img src={require('../../assets/images/hero.png')} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero