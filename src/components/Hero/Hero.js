import React from 'react';
import PropTypes from 'prop-types';
import heroIcon from './img/hero.png';
import heroIconWebp from './img/hero.webp';
import { SIGN_UP_LINK } from '../constants';

import './Hero.scss';

const Hero = ({ hero }) => {
  return (
    <section className="hero">
      <div className="hero__container _container">
        <h1 className="hero__title">{hero.title}</h1>
        <h4 className="hero__text">{hero.subtitle}</h4>
        <a href={SIGN_UP_LINK} className="hero__link">
          {hero.button_text}
        </a>
      </div>
      <picture>
        <source srcSet={heroIconWebp} type="image/webp" />
        <img src={heroIcon} alt="" className="hero__img" />
      </picture>
    </section>
  );
};

Hero.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    button_text: PropTypes.string,
  }),
};

export default Hero;
