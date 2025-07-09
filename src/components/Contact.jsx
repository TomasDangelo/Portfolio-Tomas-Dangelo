import React, { useContext } from 'react';
import { LanguageContext } from './context/languageContext';
import { translations } from './translations';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div name='contact' className='w-full bg-[#0a192f] flex justify-center items-center flex-col p-12'>
      <button className='text-white rounded-lg group px-6 py-3 my-4 flex items-center bg-pink-600 border-2 border-transparent hover:bg-[#0a192f] hover:border-pink-600 transition-all duration-300'>
        <a className='inline font-bold mr-2 text-white hover:text-rose-900' href="mailto:tomasdangelo7@outlook.es">
          {t.contact_email}</a>
      </button>
      <button className='text-white rounded-lg group px-6 py-3 my-4 flex items-center bg-pink-600 border-2 border-transparent hover:bg-[#0a192f] hover:border-pink-600 transition-all duration-300'>
        <a className='inline font-bold ml-2 text-white hover:text-rose-900' href="https://wa.me/543415987640?text=Hola,%20vi%20tu%20portfolio%20y%20quiero%20contactarte." target="_blank" rel="noopener noreferrer">
          {t.contact_whatsapp}
        </a>
      </button>
    </div>
  );
};

export default Contact;