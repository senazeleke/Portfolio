import React, { useState } from 'react';
import HeroImage from '../assets/heroImage.JPG';
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Software Engineer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I’m Sena Zeleke, a Software Engineer specializing in full-stack web and mobile development.
          </p>

          <div className='flex space-x-4'>
            {/* Toggle Social Links */}
            <button
              onClick={() => setShowSocial(!showSocial)}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Social Media
              <MdKeyboardArrowRight size={25} className="ml-1 group-hover:rotate-90 duration-300"/>
            </button>

            {/* CV Button */}
            <a 
              href="https://drive.google.com/file/d/1RRObGLOadWYJ02mb2mbakJ6iRJ0RABYw/view?usp=sharing" 
              target="_blank" 
              rel="noreferrer"
              className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-teal-500 cursor-pointer"
            >
              CV <BsFillPersonLinesFill size={25}/>
            </a>
          </div>

          {/* Social Links Popup */}
          {showSocial && (
            <div className="mt-6 flex space-x-4">
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

        <div>
          <img 
            src={HeroImage} 
            alt='my profile'
            className='rounded-full mx-auto w-2/3 md:w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
