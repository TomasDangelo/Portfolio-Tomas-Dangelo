import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen border-t-4 bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/29bc31bc-d35b-4fb1-ac83-7748d08665e0" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contacto</p>
                <p className='text-gray-300 py-4'> Envía este formulario, <a className='text-pink-600 inline font-bold' href="mailto:tomasdangelo7@outlook.es">o enviame un mail</a> </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nombre...' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email...' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Mensaje...'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Enviar</button>
        </form>
    </div>
  )
}

export default Contact