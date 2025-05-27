import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronIcon from './ChevronIcon';

import './FAQ.scss';

const FAQ = ({ faq }) => {
  const { items } = faq;
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq__container _container">
        <h1 className="faq__title">{faq.title}</h1>
        <div className="faq__items">
          {items.map((item, index) => (
            <div key={index} className={`faq__item ${openIndex === index ? 'opened' : ''}`}>
              <div
                className={`faq__question ${openIndex === index ? 'opened' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                <h3 className="faq__question-title">{item.title}</h3>
                <span className={`faq__icon ${openIndex === index ? 'opened' : ''}`}>
                  <ChevronIcon />
                </span>
              </div>
              <div className="faq__answer">
                <div className="faq__answer-content">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  faq: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
};

export default FAQ;
