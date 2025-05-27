import React from 'react';
import PropTypes from 'prop-types';
import { SIGN_UP_LINK } from '../constants';

import './Registration.scss';

const Registration = ({ register }) => {
  return (
    <section className="register">
      <div className="register__container">
        <a href={SIGN_UP_LINK} className="register__link">
          {register.title}
        </a>
      </div>
    </section>
  );
};

Registration.propTypes = {
  register: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default Registration;
