import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hola, mi nombre es</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Tomás D'Angelo</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Soy Frontend Developer</h2>
            <p className='py-4 max-w-[700px] text-[#8892b0]'>Soy Licenciado en Relaciones Internacionales, pero mi pasión por el aprendizaje me llevó a iniciarmi camino como developer en 2022. Ya finalicé cursos de Desarrollo Web, Javascript y ReactJS. En este momento, estoy aprendiendo programación backend con el objetivo de convertirme en Full Stack Developer. Para 2023, voy a estudiar Ingeniería en Sistemas de la información en la Universidad Tecnológica Nacional.
            </p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
            </button>
        </div>

        </div>
    </div>
  )
}

export default Home