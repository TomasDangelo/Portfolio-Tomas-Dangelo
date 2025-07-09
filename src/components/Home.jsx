import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { LanguageContext } from './context/languageContext';
import { translations } from './translations';

const Home = () => {
  const { language } = useContext(LanguageContext);
  const lang = language === "es" ? "es" : "en";
  const t = translations[lang];

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 font-bold text-3xl pt-16'>{t.home_greeting}</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Tomás D'Angelo</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>{t.home_role}</h2>
        <p className='py-4 max-w-[700px] text-[#8892b0]'>{t.home_desc}</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to="work" smooth={true} duration={500}>{t.home_button}</Link>
            <span className='group-hover:rotate-90 duration-300'>  </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;