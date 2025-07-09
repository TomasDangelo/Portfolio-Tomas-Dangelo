import React, { useState, useContext } from 'react';
import Logo from '../assets/logo-td-2.png';
import { Link } from 'react-scroll';
import { LanguageContext } from './context/languageContext';
import { translations } from './translations';
import { Linkedin, Github, Mail, FileText } from "lucide-react";

const menuLinks = [
  { to: "home", key: "home" },
  { to: "about", key: "about" },
  { to: "skills", key: "skills" },
  { to: "work", key: "work" },
  { to: "contact", key: "contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/tomasdangelo/",
    label: "linkedin",
    bg: "bg-blue-600",
    icon: Linkedin,
  },
  {
    href: "https://github.com/TomasDangelo",
    label: "github",
    bg: "bg-[#333333]",
    icon: Github,
  },
  {
    href: "mailto:tomasdangelo7@outlook.es",
    label: "email",
    bg: "bg-[#6fc2b0]",
    icon: Mail,
  },
  {
    href: "https://drive.google.com/drive/folders/18qgqHpnZpPgY2CltQgPZ4jv9Ry7hOowB?q=sharedwith:public%20parent:18qgqHpnZpPgY2CltQgPZ4jv9Ry7hOowB",
    label: "cv",
    bg: "bg-[#fd7b47e0]",
    icon: FileText,
  },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const { language, switchLanguage } = useContext(LanguageContext);
  const t = translations[language === "es" ? "es" : "en"];

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
          {t.switch}
        </button>
      </div>
      {/* Menú visible para dispositivos grandes */}
      <ul className="hidden md:flex">
        {menuLinks.map(link => (
          <li key={link.key}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              className="hover:border-b-4 border-pink-600 duration-100"
            >
              {t[link.key]}
            </Link>
          </li>
        ))}
      </ul>
      {/* Menú hamburguesa */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
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
          {menuLinks.map(link => (
            <li className="py-6 text-4xl" key={link.key}>
              <Link
                onClick={handleClick}
                to={link.to}
                smooth={true}
                duration={500}
                className="hover:border-b-4 border-pink-600 duration-100"
              >
                {t[link.key]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Icons para redes sociales */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map(({ href, label, bg, icon: Icon }) => (
            <li
              key={label}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bg}`}
            >
              <a
                className="flex justify-between font-bold items-center w-full text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
                href={href}
              >
                {t[label]} <Icon className="w-8 h-8" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}