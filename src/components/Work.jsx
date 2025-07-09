import React, { useContext } from 'react';
import Aguamerica from '../assets/logo-aguamerica.jpg';
import Ruth from '../assets/logo-ruth.jpg';
import Toms from '../assets/logo-toms.png';
import Ricanova from '../assets/ricanova.png';
import RedSocial from '../assets/red-social.webp';
import { LanguageContext } from './context/languageContext';

const Work = () => {
  const { language } = useContext(LanguageContext);
  const lang = language === "es" ? "es" : "en";
  const t = translations[lang];

  return (
    <div name='work' className='w-full text-gray-300 bg-[#0a192f] pb-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            {t.title}
          </p>
          <p className='py-6'>{t.description}</p>
        </div>
        <div className='grid sm:grid-cols-2 gap-4'>
          {projects.map((project, idx) => (
            <div key={idx} style={{ backgroundImage: `url(${project.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div p-8'>
              <div className='opacity-0 group-hover:opacity-100'>
                <div className='pt-8 text-center'>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      {t.demo}
                    </button>
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      {project.privateCode ? t.privateCode : t.code}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const projects = [
  {
    title: "TdSocial",
    image: RedSocial,
    demo: "https://tdsocial-kvf4.vercel.app/",
    code: "https://github.com/TomasDangelo/tdsocial",
    privateCode: false,
  },
  {
    title: "Ricanova",
    image: Ricanova,
    demo: "https://ricanova.vercel.app/",
    code: "https://github.com/TomasDangelo/Ricanova",
    privateCode: false,
  },
  {
    title: "Ruth Pastelería",
    image: Ruth,
    demo: "https://ruthpasteleria.vercel.app/",
    code: "https://github.com/TomasDangelo/",
    privateCode: true,
  },
  {
    title: "Aguamerica",
    image: Aguamerica,
    demo: "https://aguamerica-tomas-d-angelo.vercel.app/",
    code: "https://github.com/TomasDangelo/Aguamerica-TomasD-Angelo",
    privateCode: false,
  },
  {
    title: "TOM'S Store",
    image: Toms,
    demo: "https://productos-tomasdangelo.vercel.app/",
    code: "https://github.com/TomasDangelo/TOM-S-STORE",
    privateCode: false,
  },
];

const translations = {
  es: {
    title: "Mis trabajos",
    description: "Estos son algunos de los proyectos que realicé. TdSocial es un pequeño proyecto de una red social estilo X, hecho con Next.js, utilizando Prisma. Ricanova -aún en construcción- es un proyecto para un cliente español. Es una empresa de coches y artículos de bebé; el proyecto se encuentra en desarrollo con React.js y Node.js.  Ruth Pastelería es mi segundo proyecto màs reciente para una clienta, ya entregado, por lo que el código es privado. Es un ecommerce serverless (con Vercel functions) hecho con ReactJS que cuenta con un panel de administrador para manejar los productos. Aguamerica fue mi primer proyecto, el cual hice para el curso de Desarrollo Web.  TOM'S Store fue el segundo; es un ecommerce hecho con ReactJS. Además, en este momento estoy trabajando en nuevos proyectos con Next.js para adquirir experiencia.",
    demo: "Demo",
    code: "Código",
    privateCode: "Código (privado)",
    myWork: "Mis trabajos"
  },
  en: {
    title: "My work",
    description: "These are some of the projects I have worked on. TdSocial is a small project for a social network similar to X, made with Next.js, using Prisma. Ricanova -still under construction- is a project for a Spanish client. It is a company that sells cars and baby items; the project is being developed with React.js and Node.js. Ruth Pastelería is my second most recent project for a client, already delivered, which is why the code is private. It is a serverless ecommerce built with ReactJS that includes an admin panel to manage products. Aguamerica was my first project, which I did for the Web Development course. TOM'S Store was the second; it is an ecommerce made with ReactJS. Additionally, I am currently working on new projects with Next.js to gain experience.",
    demo: "Demo",
    code: "Code",
    privateCode: "Private code",
    myWork: "My work"
  }
}
export default Work;