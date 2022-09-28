import React from 'react';
import Aguamerica from '../assets/logo-aguamerica.jpg';
import Ruth from '../assets/logo-ruth.jpg'
import Toms from '../assets/logo-toms.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Mis trabajos
          </p>
          <p className='py-6'>Estos son algunos de los proyectos que realicé</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div style={{ backgroundImage: `url(${Aguamerica})` }}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-grey tracking-wider'>
                Proyecto de Desarrollo Web
              </span>
              <div className='pt-8 text-center'>
                <a target={"blamk"} href='https://aguamerica-tomas-d-angelo.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={"blank"} href='https://github.com/TomasDangelo/Aguamerica-TomasD-Angelo'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ruth})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                Proyecto para JavaScript
              </span>
              <div className='pt-8 text-center'>
                <a target={"blank"} href='https://ruthcarrito.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={"blank"} href='https://github.com/TomasDangelo/Ruth'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Toms})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
                Proyecto para React JS 
              </span>
              <div className='pt-8 text-center'>
                <a target={"blank"} href='https://productos-tomasdangelo.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={"blank"} href='https://github.com/TomasDangelo/TOM-S-STORE'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </div>
  );
};

export default Work;