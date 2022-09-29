import React, {useState} from 'react'
import Logo from '../assets/logo-td-2.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
        <div>
            <img src={Logo} alt="logo-tomas-dangelo" style={{width: '70px'}} />
        </div>
    {/* Menú visible para dispositivos grandes */}

            <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500}>
                    Inicio
                </Link>
            </li>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    Sobre mí
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    Habilidades
                </Link>
            </li>
            <li>
                <Link to="work" smooth={true} duration={500}>
                    Trabajos
                </Link>
            </li>
            <li>
                <Link to="contact" smooth={true} duration={500}>
                    Contacto
                </Link>
            </li>
            </ul>
    {/* Menú hamburguesa */}
    <div onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars/> : <FaTimes/>} 
    </div>

    {/* Menú para mobile */}
    <div>
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Inicio
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    Sobre mí
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Habilidades
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                    Trabajos
                </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                    Contacto
                </Link>
            </li>
        </ul>
    </div>

    {/* Icons para redes sociales */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between font-bold items-center w-full text-gray-300' target={"blank"} href="https://www.linkedin.com/in/tomasdangelo/">
                LinkedIn <FaLinkedin size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between font-bold font-bold items-center w-full text-gray-300' target={"blank"} href="https://www.linkedin.com/in/tomasdangelo/">
                Github <FaGithub size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' target={"blank"} href="https://www.linkedin.com/in/tomasdangelo/">
                Email <HiOutlineMail size={30}/>
            </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fd7b47e0]'>
            <a className='flex justify-between font-bold items-center w-full text-gray-300' target={"blank"} href="https://drive.google.com/drive/folders/18qgqHpnZpPgY2CltQgPZ4jv9Ry7hOowB?usp=sharing">
                CV <BsFillPersonLinesFill size={30}/>
            </a>
        </li>
    </ul>
    </div>

    </div>
  )
}

export default Navbar