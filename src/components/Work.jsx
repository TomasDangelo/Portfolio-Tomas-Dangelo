import React, {useContext} from 'react';
import Aguamerica from '../assets/logo-aguamerica.jpg';
import Ruth from '../assets/logo-ruth.jpg'
import Toms from '../assets/logo-toms.png'
import Ricanova from '../assets/ricanova.png'
import { LanguageContext } from './context/languageContext'



const Work = () => {
    const {language} = useContext(LanguageContext)
  
  return (
    <div name='work' className='w-full  text-gray-300 bg-[#0a192f] pb-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
             {language === 'spanish'? 'Mis trabajos' : 'My work' }
          </p>
             
          <p className='py-6'>{language === 'spanish' ? 'Estos son algunos de los proyectos que realicé. Ricanova -aún en construcción- es mi proyecto más reciente (Mayo de 2025) para un cliente español. Es una empresa de coches y artículos de bebé; el proyecto se encuentra en desarrollo con React.js y Node.js.  Ruth Pastelería es mi segundo proyecto màs reciente para una clienta, ya entregado, por lo que el código es privado. Es un ecommerce serverless (con Vercel functions) hecho con ReactJS que cuenta con un panel de administrador para manejar los productos. Aguamerica fue mi primer proyecto, el cual hice para el curso de Desarrollo Web.  TOM\'S Store fue el segundo; es un ecommerce hecho con ReactJS. Además, en este momento estoy trabajando en nuevos proyectos con Next.js para adquirir experiencia.' : 'These are some of the projects I have worked on. Ricanova -still in process- is my most recent proyect (May 2025) for a spanish client. It is a baby items company. I am still working on the development with React.js and Node.js. Ruth Pastelería is my second most recent Project (2025) for a client, already delivered, which is why the code is private. It is a serverless ecommerce built with React JS. It includes an admin panel to handle the products. Aguamerica was my first project, created for the Web Development course.  TOM\'S Store was the second; it was made with ReactJS.  I am also currently working on new projects with Next.js to gain more experience.'}</p>


        </div>

        <div className='grid sm:grid-cols-2  gap-4'>

                  <div style={{ backgroundImage: `url(${Ricanova})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-8'>
             
                  <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                    Ricanova
                    </span>
                    <div className='pt-8 text-center'>
                    <a href="https://ricanova.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                      </button>
                    </a>
                    <a href="https://github.com/TomasDangelo/Ricanova" target="_blank" rel="noopener noreferrer">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Código
                      </button>
                    </a>
                    </div>
                  </div>
                  </div>
                  <div
                  style={{ backgroundImage: `url(${Ruth})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              
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
                  <div style={{ backgroundImage: `url(${Aguamerica})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Toms})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
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
          
        </div>
      </div>
    </div>
  );
};

export default Work;