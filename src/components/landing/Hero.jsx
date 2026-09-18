import React, { useState } from 'react';
import HeroImage from '../../assets/images/sena.jpg';
import { FaShareAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsTelegram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link as ScrollLink } from 'react-scroll';
import { LAYOUT, SCROLL, SECTION_IDS, SITE, SOCIAL_LINKS } from '../../constants';

const SOCIAL_ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
  mail: HiOutlineMail,
  telegram: BsTelegram,
};

const Hero = () => {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div name={SECTION_IDS.home} className={`relative h-screen w-full overflow-hidden ${LAYOUT.heroGradient}`}>
      <div className="hero-orb left-[8%] top-[22%] h-56 w-56 bg-cyan-500/25" />
      <div className="hero-orb right-[10%] top-[30%] h-64 w-64 bg-amber-400/20" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 pt-16">
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="hero-rise text-3xl sm:text-5xl md:text-6xl font-bold text-white whitespace-nowrap">
            I'm {SITE.fullName}
          </h2>
          <h3
            className="hero-rise text-2xl sm:text-3xl md:text-4xl font-semibold mt-3 bg-gradient-to-r from-cyan-300 via-white to-amber-300 bg-clip-text text-transparent"
            style={{ animationDelay: '120ms' }}
          >
            {SITE.role}
          </h3>
          <p
            className="hero-rise text-gray-300 py-4 text-lg sm:text-xl max-w-md mx-auto md:mx-0"
            style={{ animationDelay: '220ms' }}
          >
            {SITE.tagline}
          </p>

          <div
            className="hero-rise flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 mt-4"
            style={{ animationDelay: '340ms' }}
          >
            <button
              onClick={() => setShowSocial(!showSocial)}
              className={`group text-white px-6 py-3 flex items-center rounded-md ${LAYOUT.primaryCta} cursor-pointer shadow-[0_0_24px_rgba(6,182,212,0.35)] hover:scale-105 duration-300`}
            >
              Social Media
              <FaShareAlt size={22} className="ml-2 group-hover:scale-110 duration-300" />
            </button>

            <a
              href={SITE.cvUrl}
              target="_blank"
              rel="noreferrer"
              className={`text-white px-6 py-3 flex items-center rounded-md ${LAYOUT.cvCta} cursor-pointer hover:scale-105 duration-300`}
            >
              CV <BsFillPersonLinesFill size={22} className="ml-1" />
            </a>
          </div>

          {showSocial && (
            <div className="mt-4 flex justify-center md:justify-start space-x-4">
              {SOCIAL_LINKS.map(({ id, label, icon, href }) => {
                const Icon = SOCIAL_ICONS[icon];
                return (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col items-center justify-center w-16 h-16 bg-gray-800/80 ring-1 ring-cyan-400/30 rounded-full text-white hover:scale-110 hover:ring-amber-400/60 duration-300"
                    title={label}
                  >
                    {Icon && <Icon size={25} />}
                    <span className="text-xs mt-1">{label}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        <div className="hero-rise mb-6 md:mb-0" style={{ animationDelay: '180ms' }}>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 sm:w-2/3 md:w-2/3 lg:w-1/2 ring-4 ring-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.28)] animate-float"
          />
        </div>
      </div>

      <ScrollLink
        to={SECTION_IDS.about}
        smooth={SCROLL.smooth}
        duration={SCROLL.duration}
        offset={-90}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-300 cursor-pointer animate-bounceSoft"
      >
        <MdKeyboardArrowDown size={42} />
      </ScrollLink>
    </div>
  );
};

export default Hero;
