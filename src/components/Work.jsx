import React from 'react';
import Aguamerica from '../assets/logo-aguamerica.jpg';
import Ruth from '../assets/logo-ruth.jpg'
import Toms from '../assets/logo-toms.png'
import Clima from '../assets/clima-hoy.png'
import Td from '../assets/logotd.png'


const Work = () => {
  return (
    <div name='work' className='w-full  text-gray-300 bg-[#0a192f] pb-44'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Mis trabajos
          </p>
          <p className='py-6'>Estos son algunos de los proyectos que realicé. Aguamerica fue mi primer proyecto, el cual hice para el curso de Desarrollo Web. Ruth Pastelería mi segundo proyecto, y está hecho con JavaScript. TOM'S Store fue el tercero; está hecho con ReactJS. Weather App es el cuarto; es un proyecto hecho con ReactJS, que obtiene datos del clima a través de una API para mostrarlo a los usuarios. El quinto, "TD", es un proyecto sencillo que cree para mostrar las funcionalidades CRUD desde el backend, utilizando SQL Server como database, ASP.NET y React.js en el front. Si bien el diseño es mejorable en todos mis proyectos, lo central de los cursos fue la funcionalidad. Además, en este momento estoy trabajando en nuevos proyectos con ReactJS para adquirir experiencia. </p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2  gap-4'>

            {/* Grid Item */}
          <div style={{ backgroundImage: `url(${Aguamerica})` }}className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-grey tracking-wider'>
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
          <div
            style={{ backgroundImage: `url(${Clima})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
              </span>
              <div className='pt-8 text-center'>
                <a target={"blank"} href='https://tomasdangelo-weather-app.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={"blank"} href='https://github.com/TomasDangelo/Tomasdangelo-Weather-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Td})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider'>
              </span>
              <div className='pt-8 text-center'>
                <a target={"blank"} href='http://tomasdangelo-001-site1.htempurl.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={"blank"} href='https://github.com/TomasDangelo'>
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