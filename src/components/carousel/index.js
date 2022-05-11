import React, { useState, useEffect, Children, cloneElement, useRef } from 'react'
import Button from '../button';
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import "./carousel.scss";


export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel__item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = (props) => {
  const { autoPlay, children, scaleOnDrag = false } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slideRef = useRef('slide')


  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = Children.count(children) - 1;
    } else if (newIndex >= Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        if (!paused) {
          updateIndex(activeIndex + 1);
        }
      }, 3000);
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }
  });

  const onMouseDown = () => {
    slideRef.current.style.cursor = 'grabbing'
  }

  const onMouseUp = () => {
    slideRef.current.style.cursor = 'grab'
  }
  return (
    <div className='carousel' onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      <div className="carousel__slide" style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        ref={slideRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchStart={onMouseDown}
        onTouchEnd={onMouseUp}
        onMouseLeave={onMouseUp}
        onDragStart={(e) => {
          e.preventDefault()
          e.stopPropagation()
          return false
        }}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="carousel__indicators">
        <Button className='carousel__button carousel__button--left' hover onClick={() => {
          updateIndex(activeIndex - 1);
        }} children={<ImArrowLeft2 />} />
        {Children.map(children, (child, index) => {
          return (
            <button
              className={`carousel__dot ${index === activeIndex ? "carousel__dot--active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
        <Button className='carousel__button' hover onClick={() => {
          updateIndex(activeIndex + 1);
        }} children={<ImArrowRight2 />} />
      </div>

    </div>
  )
}

export default Carousel