import React from 'react';
import PropTypes from 'prop-types';
import { SIGN_UP_LINK } from '../constants';

import './Delight.scss';

const Delight = ({ delight }) => {
  const { plans, title, button_text, available } = delight;

  return (
    <section className="delight">
      <div className="delight__container _container">
        <h1 className="delight__title">{title}</h1>
        <div className="delight__box">
          {plans.map((plan, index) => (
            <div className="delight__item" key={index}>
              {plan.label && <div className="delight__item-label">{plan.label}</div>}
              <h2 className="delight__item-title">{plan.title}</h2>
              <span className="delight__item-available">{available}</span>
              <div className="delight__item-content">
                <ul className="delight__item-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="delight__item-list-item">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="delight__item-price">{plan.price}</div>
                <div className="delight__item-link-box">
                  <a href={SIGN_UP_LINK} className="delight__item-link btn">
                    {button_text}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Delight.propTypes = {
  delight: PropTypes.shape({
    plans: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        title: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.string
      })
    ),
    title: PropTypes.string,
    button_text: PropTypes.string,
    available: PropTypes.string
  })
};

export default Delight;
