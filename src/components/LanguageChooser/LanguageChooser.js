import React, { useContext, useState } from 'react';
import { LanguageContext } from '../Context/LanguageContext';
import { LANGUAGES } from './constant';
import Dropdown from '../Dropdown';

const LanguageChooser = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleChoose = (lang) => () => {
    changeLanguage(lang);
  };

  return (
    <section className="language-chooser__language-wrapper">
      <Dropdown buttonText={language} isArrow>
        {LANGUAGES.map((lang) => (
          <button key={lang} className="btn" onClick={handleChoose(lang)} disabled={language === lang}>
            {lang.toUpperCase()}
          </button>
        ))}
      </Dropdown>
    </section>
  );
};

export default LanguageChooser;
