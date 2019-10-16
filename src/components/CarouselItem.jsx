import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      {
        cover, title, year, contentRating, duration,
      },
    );
  };

  return (
    <div className='carousel-item'>
      <img src={cover} alt={title} className='carousel-item-image' />
      <div className='carousel-item-details'>
        <div className='carousel-item-controls'>
          <img
            src={playIcon}
            alt='Play Icon'
            
          />
          <img
            src={plusIcon}
            alt='Plus Icon'
            onClick={handleSetFavorite}
          />
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
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);