import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { NAV_LINKS, ROUTES, SCROLL, SECTION_IDS, SITE } from '../../constants';
import useScrollProgress from '../../hooks/useScrollProgress';

const brandNameClass =
  'font-logo text-3xl md:text-4xl leading-none bg-gradient-to-r from-cyan-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === ROUTES.home;
  const { scrolled } = useScrollProgress();

  const brandMark = (
    <div className="flex items-center gap-3 cursor-pointer overflow-visible">
      <img
        src={SITE.logo}
        alt=""
        className="h-8 md:h-10 w-auto object-contain"
      />
      <span className={brandNameClass}>{SITE.brandName}</span>
    </div>
  );

  return (
    <div
      className={`flex justify-between items-center w-full h-24 px-4 text-white fixed z-50 overflow-visible transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-400/20 shadow-[0_8px_30px_rgba(6,182,212,0.12)]'
          : 'bg-gradient-to-b from-black/80 to-transparent border-b border-transparent'
      }`}
    >
      <div className="ml-6 md:ml-12 overflow-visible">
        {isHome ? (
          <ScrollLink to={SECTION_IDS.home} smooth={SCROLL.smooth} duration={SCROLL.duration}>
            {brandMark}
          </ScrollLink>
        ) : (
          <RouterLink to={ROUTES.home}>
            {brandMark}
          </RouterLink>
        )}
      </div>

      {isHome && (
        <>
          <ul className="hidden md:flex">
            {NAV_LINKS.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-serif text-gray-200 hover:text-cyan-300 hover:scale-105 duration-200"
              >
                <ScrollLink
                  to={link}
                  spy
                  smooth={SCROLL.smooth}
                  duration={SCROLL.duration}
                  offset={-90}
                  activeClass="nav-link-active"
                >
                  {link}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden shrink-0"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 text-gray-300">
              {NAV_LINKS.map(({ id, link }) => (
                <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  <ScrollLink
                    onClick={() => setNav(!nav)}
                    to={link}
                    spy
                    smooth={SCROLL.smooth}
                    duration={SCROLL.duration}
                    offset={-90}
                    activeClass="nav-link-active"
                  >
                    {link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
};

export default NavBar;
