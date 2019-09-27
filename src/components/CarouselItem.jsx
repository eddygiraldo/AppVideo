import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img src={cover} alt={title} className='carousel-item-image' />
    <div className='carousel-item-details'>
      <div className='carousel-item-controls'>
        <img src={playIcon} alt='' />
        <img src={plusIcon} alt='' />
      </div>
      <p className='carousel-item-title'>
        {title}
      </p>
      <p className='carousel-item-subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>

  </div>
);

export default CarouselItem;
