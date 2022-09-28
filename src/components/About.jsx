import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Sobre mí
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola! Soy Tomás, gracias por visitar mi portfolio.</p>
            </div>
            <div>
              <p>Me fascina la tecnología y ultimamente estoy dedicando mi tiempo a aprender sobre programación. Creo que en la actualidad la tecnología es indispensable para nuestras vidas, por lo que decidí empezar a aprender cómo trabajar con ella.  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;

