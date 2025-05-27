import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ReviewsItem from './ReviewsItem';

import './Reviews.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Reviews = ({ reviews }) => {
  var settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    pauseOnTouchMove: true
  };

  return (
    <section className="reviews">
      <div className="reviews__container _container">
        <Slider {...settings} className="reviews__slider">
          {reviews.map((review, index) => (
            <div key={index}>
              <ReviewsItem review={review} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  )
};

export default Reviews;
