import React from 'react';
import PropTypes from 'prop-types';
import { Clock, PersonGear, LayoutTextWindowReverse, Toggles2, ShieldCheck, UniversalAccessCircle } from 'react-bootstrap-icons';
import useScreen from '../hooks/useScreen';

import './Common.scss';

const Common = ({ common }) => {
  const { title, items } = common;
  const { isMobile } = useScreen();
  const iconSize = isMobile() ? 40 : 60;

  const iconMap = {
    'invoice-layout': <LayoutTextWindowReverse size={iconSize} color="#7300b9" />,
    'invoice-gear': <PersonGear size={iconSize} color="#7300b9" />,
    'invoice-flexible': <Toggles2 size={iconSize} color="#7300b9" />,
    'invoice-shield': <ShieldCheck size={iconSize} color="#7300b9" />,
    'invoice-clock': <Clock size={iconSize} color="#7300b9" />,
    'invoice-accessibility': <UniversalAccessCircle size={iconSize} color="#7300b9" />,
  };

  return (
    <section className="common _container">
      <h1 className="common__title">{title}</h1>
      <div className="common__wrapper">
        {items.map((item) => (
          <div className="common__box" key={item.id}>
            <picture>{iconMap[item.icon]}</picture>
            <div className="common__content">
              <h3 className="common__content-title">{item.title}</h3>
              <p className="common__content-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Common.propTypes = {
  common: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default Common;
