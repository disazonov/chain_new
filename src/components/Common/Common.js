import React from 'react';
import PropTypes from 'prop-types';
// import { GrDocumentUser, GrDocumentTime, GrFormClock, GrPerformance } from 'react-icons/gr';
import { Clock, Speedometer2, PersonGear, Briefcase } from 'react-bootstrap-icons';

import './Common.scss';

const iconMap = {
  'invoice-clock': <Clock size={60} color="#7300b9" />,
  'invoice-gear': <PersonGear size={60} color="#7300b9" />,
  'invoice-briefcase': <Briefcase size={60} color="#7300b9" />,
  'invoice-speed': <Speedometer2 size={60} color="#7300b9" />
};

const Common = ({ common }) => {
  const { title, items } = common;

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
