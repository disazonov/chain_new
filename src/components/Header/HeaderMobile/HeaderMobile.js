import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../Dropdown';
import {SIGN_IN_LINK, SIGN_UP_LINK} from '../../constants'

const HeaderMobile = ({ header }) => {
  return (
    <section className="header-mobile-wrapper">
      <Dropdown>
        <a href={SIGN_IN_LINK} className="btn">
          {header.sign_in}
        </a>
        <a href={SIGN_UP_LINK} className="btn">
          {header.sign_up}
        </a>
      </Dropdown>
    </section>
  );
};

HeaderMobile.propTypes = {
  header: PropTypes.shape({
    sign_in: PropTypes.string,
    sign_up: PropTypes.string,
  }),
};


export default HeaderMobile;
