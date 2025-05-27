import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HowItWorksDecorWebp from './img/decor.webp';
import HowItWorksDecor from './img/decor.png';
import Screen1 from './img/screen-1.png';
import Screen2 from './img/screen-2.png';
import Screen3 from './img/screen-3.png';
import Screen4 from './img/screen-4.png';

import './HowItWorks.scss';

const HowItWorks = ({ howItWorks }) => {
  const { items } = howItWorks;
  const [selectedItemId, setSelectedItemId] = useState(items[0].id);

  const images = {
    1: Screen1,
    2: Screen2,
    3: Screen3,
    4: Screen4
  };

  return (
    <section className="how-it-works">
      <div className="how-it-works__container _container">
        <h1 className="how-it-works__title">{howItWorks.title}</h1>
        <div className="how-it-works__content-wrapper">
          <div className="how-it-works__content">
            {items.map((item) => (
              <div
                key={item.id}
                className={`how-it-works__content-item ${selectedItemId === item.id ? 'active' : ''}`}
                onClick={() => setSelectedItemId(item.id)}
              >
                <h3 className="how-it-works__content-title">
                  {item.id}. {item.title}
                </h3>
                <p className="how-it-works__content-subtitle">{item.subtitle}</p>
              </div>
            ))}
          </div>
          <picture className="how-it-works__content-screen-wrapper">
            <img
              src={images[selectedItemId]}
              alt={items.find((item) => item.id === selectedItemId).title}
              className="how-it-works__content-screen"
            />
          </picture>
        </div>
      </div>
      <div className="how-it-works__decor">
        <picture>
          <source srcSet={HowItWorksDecorWebp} type="image/webp" />
          <img src={HowItWorksDecor} alt="" />
        </picture>
      </div>
    </section>
  );
};

HowItWorks.propTypes = {
  howItWorks: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default HowItWorks;
