import React from 'react';
import PropTypes from 'prop-types';
import useScreen from '../hooks/useScreen';
import Logo from '../../assets/img/logo.png';
import LogoWebp from '../../assets/img/logo.webp';
import LanguageChooser from '../LanguageChooser';
import HeaderMobile from './HeaderMobile';
import { SIGN_UP_LINK, SIGN_IN_LINK } from '../constants';

import './Header.scss';

const Header = ({ header }) => {
  const { isMobile } = useScreen();

  if (isMobile()) {
    return (
      <header className="header">
        <div className="header__container">
          <a href="/" className="header__logo">
            <picture>
              <source srcSet={LogoWebp} type="image/webp" />
              <img src={Logo} alt="" />
            </picture>
          </a>
          <LanguageChooser />
          <HeaderMobile header={header} />
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <picture>
            <source srcSet={LogoWebp} type="image/webp" />
            <img src={Logo} alt="" />
          </picture>
        </a>
        <div className="header__actions">
          <div className="header__actions__enter">
            <a href={SIGN_IN_LINK} className="header__login">
              {header.sign_in}
            </a>
            <a href={SIGN_UP_LINK} className="header__register">
              {header.sign_up}
            </a>
          </div>
          <LanguageChooser />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.shape({
    sign_in: PropTypes.string,
    sign_up: PropTypes.string,
  }),
};

export default Header;
