import React, { useState } from 'react';
import HeroImage from '../assets/sena.jpg';
import { FaShareAlt, FaGithub, FaLinkedin } from "react-icons/fa"; 
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Home = () => {
  const [showSocial, setShowSocial] = useState(false);

  const socialLinks = [
    { id: 1, label: 'LinkedIn', icon: <FaLinkedin size={25}/>, href: 'https://linkedin.com' },
    { id: 2, label: 'Github', icon: <FaGithub size={25}/>, href: 'https://github.com/senazeleke' },
    { id: 3, label: 'Mail', icon: <HiOutlineMail size={25}/>, href: 'mailto:senazeleke258@gmail.com' },
    { id: 4, label: 'Telegram', icon: <BsTelegram size={25}/>, href: 'https://t.me/Theotokos_ICU' },
  ];

  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-blue-900'>
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4'>
        
        {/* Text Section */}
        <div className='flex flex-col justify-center h-full text-center md:text-left'>
          <h2 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white whitespace-nowrap'>
            I'm Sena Zeleke
          </h2>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-white mt-3'>
            Software Engineer
          </h3>
          <p className='text-gray-400 py-4 text-lg sm:text-xl max-w-md mx-auto md:mx-0'>
            I build software and develop full-stack web and mobile applications.
          </p>

          <div className='flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4'>
            {/* Social Media Toggle */}
            <button
              onClick={() => setShowSocial(!showSocial)}
              className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Social Media
              <FaShareAlt size={22} className="ml-2 group-hover:scale-110 duration-300"/>
            </button>

            {/* CV Button */}
            <a 
              href="https://drive.google.com/file/d/1RRObGLOadWYJ02mb2mbakJ6iRJ0RABYw/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
              className="text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-green-500 to-teal-500 cursor-pointer"
            >
              CV <BsFillPersonLinesFill size={22} className="ml-1"/>
            </a>
          </div>

          {/* Social Links Popup */}
          {showSocial && (
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              {socialLinks.map(({id, label, icon, href}) => (
                <a 
                  key={id} 
                  href={href} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center w-16 h-16 bg-gray-500 rounded-full text-white hover:scale-110 duration-300"
                  title={label}
                >
                  {icon}
                  <span className="text-xs mt-1">{label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Image Section */}
        <div className='mb-6 md:mb-0'>
          <img 
            src={HeroImage} 
            alt='my profile'
            className='rounded-full mx-auto w-2/3 sm:w-2/3 md:w-2/3 lg:w-1/2'
          />

        </div>

      </div>
    </div>
  );
}

export default Home;
