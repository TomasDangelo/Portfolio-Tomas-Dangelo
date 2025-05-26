import React, {useContext} from 'react'
import { LanguageContext } from './context/languageContext'



const Contact = () => {

  const {language} = useContext(LanguageContext)

  return (
    <div name='contact' className='w-full  bg-[#0a192f] flex flex-col justify-center items-center p-4 pb-8'>
        <button className='text-white rounded-lg group border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
        <a className='text-pink-600 inline font-bold mr-2 hover:text-white' href="mailto:tomasdangelo7@outlook.es">
          {language === 'spanish'? 'Enviame un email' : 'Send me an email'}</a>               
        </button>
        <button className='text-white rounded-lg group border-2 px-6 py-3 my-4 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
      
        <a className='text-pink-600 inline font-bold ml-2 hover:text-white' href="https://wa.me/543415987640?text=Hola,%20vi%20tu%20portfolio%20y%20quiero%20contactarte." target="_blank" rel="noopener noreferrer"> 
        
        {language === 'spanish'? 'Contáctame por WhatsApp' : 'Contact me via Whatsapp'} 
</a>
</button>


    </div>
  )
}

export default Contact