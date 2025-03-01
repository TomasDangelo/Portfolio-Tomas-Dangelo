import React, {useContext} from 'react';
import Aguamerica from '../assets/logo-aguamerica.jpg';
import Ruth from '../assets/logo-ruth.jpg'
import Toms from '../assets/logo-toms.png'
import Clima from '../assets/clima-hoy.png'
import { LanguageContext } from './context/languageContext'



const Work = () => {
    const {language} = useContext(LanguageContext)
  
  return (
    <div name='work' className='w-full  text-gray-300 bg-[#0a192f] pb-44'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
             {language === 'spanish'? 'Mis trabajos' : 'My work' }
          </p>
             
          <p className='py-6'>{language === 'spanish' ? 'Estos son algunos de los proyectos que realicé. Ruth Pastelería es mi proyecto más reciente (2025) para una clienta, por lo que el código es privado. Es un ecommerce serverless (con Vercel functions) hecho con ReactJS que cuenta con un panel de administrador para manejar los productos. Aguamerica fue mi primer proyecto, el cual hice para el curso de Desarrollo Web.  TOM\'S Store fue el segundo; es un ecommerce hecho con ReactJS. Weather App es el terero; es un proyecto hecho con ReactJS, que obtiene datos del clima a través de una API para mostrarlo a los usuarios. Si bien el diseño es mejorable en todos mis proyectos, lo central de los cursos fue la funcionalidad. Además, en este momento estoy trabajando en nuevos proyectos con ReactJS para adquirir experiencia.' : 'These are some of the projects I have worked on. Aguamerica was my first project, created for the Web Development course. Ruth Pastelería is my most recent Project (2025) for a client, which is why the code is private. It is a serverless ecommerce built with React JS. It includes an admin panel to handle the products. TOM\'S Store was the second; it was made with ReactJS. Weather App is the third, a ReactJS project that fetches weather data through an API to display it to users.  While the design can be improved in all my projects, the courses primarily focused on functionality. I am also currently working on new projects with ReactJS to gain more experience.' }
          </p>
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
                <a target={"blank"} href='https://ruthpasteleria.vercel.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a target={"blank"} href='https://github.com/TomasDangelo/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Código (privado)
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
        </div>
      </div>
    </div>
  );
};

export default Work;