import React, {useState, useContext} from 'react'
import Logo from '../assets/logo-td-2.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
import { LanguageContext } from './context/languageContext'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
      const {language, switchLanguage} = useContext(LanguageContext)
    


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
    <div>
      <img src={Logo} alt="logo-tomas-dangelo" style={{ width: '70px' }} />
    </div>
    {/* Botón para cambiar idioma */}
    <div>
      <button
        className="text-gray-100 border-2 border-pink-600 rounded-lg px-4 py-2 hover:bg-pink-600 hover:text-white transition-all duration-300"
        onClick={switchLanguage}
      >
        {language === 'spanish' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
      </button>
    </div>
    {/* Menú visible para dispositivos grandes */}
    <ul className="hidden md:flex">
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:border-b-4 border-pink-600 duration-100"
        >
          {language === 'spanish' ? 'Inicio' : 'Home'}
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:border-b-4 border-pink-600 duration-100"
        >
          {language === 'spanish' ? 'Sobre mí' : 'About me'}
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          className="hover:border-b-4 border-pink-600 duration-100"
        >
          {language === 'spanish' ? 'Habilidades' : 'Skills'}
        </Link>
      </li>
      <li>
        <Link
          to="work"
          smooth={true}
          duration={500}
          className="hover:border-b-4 border-pink-600 duration-100"
        >
          {language === 'spanish' ? 'Trabajos' : 'Work'}
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:border-b-4 border-pink-600 duration-100"
        >
          {language === 'spanish' ? 'Contacto' : 'Contact'}
        </Link>
      </li>
    </ul>
    {/* Menú hamburguesa */}
    <div onClick={handleClick} className="md:hidden z-10">
      {!nav ? <FaBars /> : <FaTimes />}
    </div>
    {/* Menú para mobile */}
    <div>
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-pink-600 duration-100"
          >
            {language === 'spanish' ? 'Inicio' : 'Home'}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-pink-600 duration-100"
          >
            {language === 'spanish' ? 'Sobre mí' : 'About me'}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-pink-600 duration-100"
          >
            {language === 'spanish' ? 'Habilidades' : 'Skills'}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-pink-600 duration-100"
          >
            {language === 'spanish' ? 'Trabajos' : 'Work'}
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="hover:border-b-4 border-pink-600 duration-100"
          >
            {language === 'spanish' ? 'Contacto' : 'Contact'}
          </Link>
        </li>
      </ul>
    </div>
    {/* Icons para redes sociales */}
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            className="flex justify-between font-bold items-center w-full text-gray-300"
            target={"blank"}
            href="https://www.linkedin.com/in/tomasdangelo/"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            className="flex justify-between font-bold items-center w-full text-gray-300"
            target={"blank"}
            href="https://github.com/TomasDangelo"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            className="flex justify-between items-center font-bold w-full text-gray-300"
            target={"blank"}
            href="mailto:tomasdangelo7@outlook.es"
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fd7b47e0]">
          <a
            className="flex justify-between font-bold items-center w-full text-gray-300"
            target={"blank"}
            href="https://drive.google.com/drive/folders/18qgqHpnZpPgY2CltQgPZ4jv9Ry7hOowB?q=sharedwith:public%20parent:18qgqHpnZpPgY2CltQgPZ4jv9Ry7hOowB"
          >
            CV <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  </div>
  
  )
}

export default Navbar