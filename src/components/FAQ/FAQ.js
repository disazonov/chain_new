import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';

import './FAQ.scss';

const FAQ = ({ faq }) => {
  const { title, items } = faq;

  const accordionItems = items.map(item => ({
    key: item.id,
    label: <h3 className='faq__question'>{item.title}</h3>,
    children: <p className='faq__answer'>{item.text}</p>
  }));

  return (
    <section className="faq">
      <div className="faq__container _container">
        <h1 className="faq__title">{title}</h1>
        <Collapse bordered={false}  expandIconPosition='end' ghost className="faq__accordion" items={accordionItems} />
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
