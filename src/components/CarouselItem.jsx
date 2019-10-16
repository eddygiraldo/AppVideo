import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play.png';
import plusIcon from '../assets/static/plus.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      {
        cover, title, year, contentRating, duration,
      },
    );
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img src={cover} alt={title} className='carousel-item-image' />
      <div className='carousel-item-details'>
        <div className='carousel-item-controls'>

          <Link to={`/player/${id}`}>
            <img
              src={playIcon}
              alt='Play Icon'
            />
          </Link>

          {
            isList ?
              (
                <p
                  onClick={() => handleDeleteFavorite(id)}
                >
                  Remove
                </p>
              ) :
              (
                <img
                  src={plusIcon}
                  alt='Plus Icon'
                  onClick={handleSetFavorite}
                />
              )
          }
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
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
