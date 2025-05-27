import React from 'react';
import PropTypes from 'prop-types';
import LogoFooter from './img/footer-logo.png';
import IconInstagram from './img/instagram.svg';
import IconTelegram from './img/telegram.svg';

import './Footer.scss';

const Footer = ({ footer }) => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__item">
          <div className="footer__logo">
            <img src={LogoFooter} alt="LogoFooter" />
          </div>
        </div>
        <div className="footer__item">
          <div className="footer__item-box">
            <a href="maito:mailer@chainapp.com.ua" className="footer__mail link-contact">
							mailer@chainapp.com.ua
            </a>
          </div>
          <a href="tel:+380736276778" className="footer__phone link-contact">
            +380736276778
          </a>
          <div className="footer__item-box">
            <p className="footer__text footer__text_icon">{footer.address}</p>
          </div>
        </div>
        <div className="footer__item footer__item_soc">
          <a href="https://www.instagram.com/chainapp_?igsh=MWZwMWs3dHpibXlyMQ==" target='_blank' className="footer__link" rel="noreferrer">
            <img src={IconInstagram} alt="IconInstagram" />
          </a>
          <a href="https://t.me/CHAININVOIC" target='_blank' className="footer__link" rel="noreferrer">
            <img src={IconTelegram} alt="IconTelegram" />
          </a>
        </div>
      </div>
      <div className="footer__container footer__container_info _container">
        <div className="footer__info">© {new Date().getFullYear()} {footer.rights}</div>
        <div className="footer__info">
          <a href="https://www.chainapp.com.ua/Privacy-Policy.pdf" target="_blank" rel="noreferrer">
            {footer.terms}
          </a>
          {' | '}
          <a href="https://www.chainapp.com.ua/Privacy-Policy.pdf" target="_blank" rel="noreferrer">
            {footer.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
	footer: PropTypes.shape({
		address: PropTypes.string,
		terms: PropTypes.string,
		rights: PropTypes.string,
		privacy: PropTypes.string,
	}),
};

export default Footer;
