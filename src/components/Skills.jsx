import React, { useContext } from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Nodejs from '../assets/node.jpg';
import csharp from '../assets/Csharp.png';
import asp from '../assets/asp.png';
import cobol from '../assets/cobol.png';
import Typescript from '../assets/Typescript.svg.png';
import Nextjs from '../assets/next-js.jpg'
import { LanguageContext } from './context/languageContext';
import { translations } from './translations';

const skillsList = [
  { name: "HTML", img: HTML },
  { name: "CSS", img: CSS },
  { name: "JAVASCRIPT", img: JavaScript },
  { name: "REACT JS", img: ReactImg },
  { name: "NODE JS", img: Nodejs },
  { name: "C#", img: csharp },
  { name: "ASP.NET", img: asp },
  { name: "COBOL", img: cobol },
  { name: "TYPESCRIPT", img: Typescript },
  { name: "NEXT.JS", img: Nextjs },
];

const Skills = () => {
  const { language } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            {t.skills_title}
          </p>
          <p className='py-4'>{t.skills_desc}</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skillsList.map(skill => (
            <div
              key={skill.name}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            >
              <img className='w-20 mx-auto' src={skill.img} alt={`${skill.name} icon`} />
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;