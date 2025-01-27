import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
        <a className='text-pink-600 inline font-bold mr-2 hover:text-white' href="mailto:tomasdangelo7@outlook.es">Enviame un email</a>               
        </button>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white'>
      
        <a className='text-pink-600 inline font-bold ml-2 hover:text-white' href="https://wa.me/543415987640?text=Hola,%20vi%20tu%20portfolio%20y%20quiero%20contactarte." target="_blank" rel="noopener noreferrer"> Contáctame por WhatsApp
</a>
</button>


    </div>
  )
}

export default Contact