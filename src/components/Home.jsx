import React, {useContext} from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { LanguageContext } from './context/languageContext'
const Home = () => {
    const {language} = useContext(LanguageContext)
  
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 font-bold text-3xl pt-16'>{language === 'spanish'? 'Hola, mi nombre es' : 'Hi, my name is'}</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Tomás D'Angelo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> {language === 'spanish'? 'Soy Full Stack Developer' : 'I am a Full Stack Developer'}</h2>
            <p className='py-4 max-w-[700px] text-[#8892b0]'>
              {language === 'spanish'? 'Soy Licenciado en Relaciones Internacionales, pero mi pasión por el aprendizaje me llevó a iniciar mi camino como developer en 2022. Realicè el curso de Full Stack Developer en Coderhouse, donde aprendí tanto Frontend con HTML,CSS,JS y React, como Backend con Node. Continuè apreniendo por mi cuenta programación backend con C# y .NET. Finalmente, decidí iniciar la carrera de  Ingeniería en sistemas en la Universidad Tecnológica Nacional, donde aprendí Python.' : 
              'I have a degree in International Relations, but my passion for learning led me to start my journey as a developer in 2022.  I completed the Full Stack Developer course at Coderhouse, where I learned both Frontend development with HTML, CSS, JS, and React, and Backend development with Node.   I continued learning Backend programming on my own with C# and .NET. Finally, I decided to start pursuing a degree in Systems Engineering at the National Technological University, where I learned Python'}
               
            </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              <Link to="work" smooth={true} duration={500}> {language === 'spanish'? 'Mirá mis trabajos':'Take a look at my work'} </Link> 
          <span className='group-hover:rotate-90 duration-300'>   <HiArrowNarrowRight className='ml-3'/></span>
            </button>
        </div>

        </div>
    </div>
  )
}

export default Home