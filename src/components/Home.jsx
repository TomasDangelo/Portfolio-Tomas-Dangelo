import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600 font-bold text-3xl pt-16'>Hola, mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tomás D'Angelo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Frontend Developer</h2>
            <p className='py-4 max-w-[700px] text-[#8892b0]'>Soy Licenciado en Relaciones Internacionales, pero mi pasión por el aprendizaje me llevó a iniciar mi camino como developer en 2022. Finalicé el curso de Full Stack Web Developer de Coderhouse en abril, el cual duró un año. Sin embargo, a pesar de que JavaScript me parece maravilloso, decidí ampliar mis conocimientos hacia otros lenguajes y comenzar a aprender  C# por mi cuenta, lo cual también me fascinó. Ya conozco sobre C# nativo, Blazor, y ASP.NET MVC. Además, estoy cursando el programa "Cobol Developer Junior" que ofrece la Universidad de Buenos Aires.
            </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              <Link to="work" smooth={true} duration={500}>Mirá mis trabajos</Link> 
          <span className='group-hover:rotate-90 duration-300'>   <HiArrowNarrowRight className='ml-3'/></span>
            </button>
        </div>

        </div>
    </div>
  )
}

export default Home