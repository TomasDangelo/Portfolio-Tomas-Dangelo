import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <a className='text-pink-600 inline font-bold mr-2' href="mailto:tomasdangelo7@outlook.es">Enviame un email</a> 
        <a className='text-pink-600 inline font-bold ml-2' href="https://wa.me/543415987640?text=Hola,%20vi%20tu%20portfolio%20y%20quiero%20contactarte." target="_blank" rel="noopener noreferrer"
>
  Contáctame por WhatsApp
</a>

    </div>
  )
}

export default Contact