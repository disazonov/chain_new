import React, { useContext, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Common from './components/Common/Common';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Delight from './components/Delight';
import GetStartedNow from './components/GetStartedNow';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import Footer from './components/Footer/Footer';
import { LanguageContext } from './components/Context/LanguageContext';
import translations from './translations/translations';

import './App.scss';

const App = () => {
  const { language, changeLanguage } = useContext(LanguageContext);
  const data = translations[language];

  useEffect(() => {
    const userLocale = navigator.language || navigator.userLanguage;

    if (userLocale === 'ru-UA') {
      return changeLanguage('ru');
    }

    if (userLocale === 'ua-UA') {
      return changeLanguage('ua');
    }

    return changeLanguage('en');
  }, []);

  return (
    <section className="wrapper-main">
      <Header header={data.header} />
      <Hero hero={data.hero} />
      <Common common={data.common} />
      <HowItWorks howItWorks={data.howItWorks} />
      <Reviews reviews={data.reviews} />
      <GetStartedNow getStartedNow={data.getStartedNow} />
      <Delight delight={data.delight} />
      <FAQ faq={data.faq} />
      <Registration register={data.register} />
      <Footer footer={data.footer} />
    </section>
  );
};

export default App;
