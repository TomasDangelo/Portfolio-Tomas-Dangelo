import React, {useContext} from 'react';
import { LanguageContext } from './context/languageContext';
const About = () => {

  const {language} = useContext(LanguageContext)

  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              {language === 'spanish' ? 'Sobre mí' : 'About me' }
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> {language === 'spanish' ? 'Hola! Soy Tomás, gracias por visitar mi página.' : 'Hi! My name is Tomas, thank you for visiting my webpage' }</p>
            </div>
            <div>
              <p>
              {language === 'spanish' ? 'Aunque soy Licenciado en Relaciones Internacionales, también me fascina la tecnología y decidí dar un giro y dedicar mi tiempo para en un futuro ser profesional en programación. Creo que en la actualidad la tecnología es indispensable para nuestras vidas, por lo que decidí empezar a aprender cómo trabajar con ella.' : 'Although I have a degree in International Relations, I am also fascinated by technology and decided to make a shift, dedicating my time to becoming a professional in programming in the future. I believe that technology is essential in our lives today, which is why I decided to start learning how to work with it.' }
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

