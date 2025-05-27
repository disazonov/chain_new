import React from 'react';
import PropTypes from 'prop-types';
import AvatarOne from './img/avatar-1.png';
import AvatarTwo from './img/avatar-2.jpg';
import AvatarThree from './img/avatar-3.png';
import AvatarFour from './img/avatar-4.png';
import AvatarFive from './img/avatar-5.png';

const ReviewsItem = ({ review }) => {
  const getAvatar = (id) => {
    switch (id) {
      case '1':
        return AvatarThree;
      case '2':
        return AvatarTwo;
      case '3':
        return AvatarOne;
      case '4':
        return AvatarFour;
      case '5':
        return AvatarFive;
      default:
        return null;
    }
  };

  return (
    <div className="reviews__item">
      <div className="reviews__item_avatar">
        <img src={getAvatar(review.id)} alt={review.name} />
      </div>
      <div className="reviews__item-info">
        <h3 className="reviews__item_title">{review.title}</h3>
        <h4 className="reviews__item_content">{review.review}</h4>
        <div className="reviews__box">
          <h4 className="reviews__name">{review.name}</h4>
        </div>
      </div>
    </div>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    review: PropTypes.string,
    name: PropTypes.string
  })
};

export default ReviewsItem;
