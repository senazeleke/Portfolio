import React from 'react';
import { SITE } from '../../constants';

const Footer = () => (
  <footer className="w-full bg-black text-white border-t border-cyan-400/20">
    <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-amber-400 to-yellow-500" />
    <div className="max-w-screen-lg mx-auto px-6 py-8 text-center text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} {SITE.fullName}. Built with care.
      </p>
    </div>
  </footer>
);

export default Footer;
