import React from 'react';
import PropTypes from 'prop-types';
import { SIGN_UP_LINK } from '../constants';
import GetStartedNowImg from './img/mobile.png';
import GetStartedNowImgWebp from './img/mobile.webp';

import './GetStartedNow.scss';

const GetStartedNow = ({ getStartedNow }) => {
  const { title, text, text_2, text_3, button_text } = getStartedNow;

  return (
    <section className="get-started-now">
      <div className="get-started-now__container _container">
        <div className="get-started-now__content">
          <h2 className="get-started-now__title">{title}</h2>
          <p className="get-started-now__text">{text}</p>
          <p className="get-started-now__text">{text_2}</p>
          {text_3 && <p className="get-started-now__text">{text_3}</p>}
          <a href={SIGN_UP_LINK} className="get-started-now__link">
            {button_text}
          </a>
        </div>
        <div className="get-started-now__img">
          <picture>
            <source srcSet={GetStartedNowImgWebp} type="image/webp" />
            <img src={GetStartedNowImg} alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
};

GetStartedNow.propTypes = {
  getStartedNow: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    text_2: PropTypes.string,
    text_3: PropTypes.string,
    button_text: PropTypes.string
  })
};

export default GetStartedNow;
