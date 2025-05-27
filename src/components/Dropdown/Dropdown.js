import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import BurgerIcon from './img/burger.svg';
import IconArrow from './img/arrow-downWhite.svg';

import './Dropdown.scss';

const Dropdown = ({ children, buttonText, isArrow }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <section className="dropdown" ref={dropdownRef}>
      <button className="dropdown__toggle-button" onClick={handleOpenMenu}>
        {buttonText && <div className="dropdown__button-text">{buttonText}</div>}
        {isArrow ? (
          <img
            src={IconArrow}
            alt="IconArrow"
            className={`dropdown__arrow ${isOpen ? 'dropdown__arrow--opened' : ''} `}
          />
        ) : (
          <img src={BurgerIcon} alt="BurgerIcon" />
        )}
      </button>
      {isOpen && (
        <nav className="dropdown__nav" onClick={handleItemClick}>
          {children}
        </nav>
      )}
    </section>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  buttonText: PropTypes.string,
  isArrow: PropTypes.bool,
};

export default Dropdown;
