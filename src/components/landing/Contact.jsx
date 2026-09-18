import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelegram } from 'react-icons/bs';
import { CONTACT, LAYOUT, SECTION_IDS } from '../../constants';
import Reveal from '../ui/Reveal';

const Contact = () => {
  return (
    <div name={SECTION_IDS.contact} className={`relative w-full min-h-screen ${LAYOUT.contactGradient} p-4 text-white`}>
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto min-h-screen py-24">
        <Reveal>
          <p className="text-4xl font-bold section-heading">Contact</p>
        </Reveal>

        <Reveal delay={160} className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-16">
          <a
            href={CONTACT.emailHref}
            className="group w-full sm:w-64 px-6 py-5 rounded-xl bg-black/30 ring-1 ring-cyan-400/40 hover:ring-amber-400/70 hover:scale-105 duration-300 flex flex-col items-center gap-3"
          >
            <HiOutlineMail size={42} className="text-cyan-300 group-hover:text-amber-300 duration-300" />
            <span className="text-lg font-semibold">Email</span>
            <span className="text-sm text-gray-300 break-all">{CONTACT.email}</span>
          </a>

          <a
            href={CONTACT.telegramHref}
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-64 px-6 py-5 rounded-xl bg-black/30 ring-1 ring-cyan-400/40 hover:ring-amber-400/70 hover:scale-105 duration-300 flex flex-col items-center gap-3"
          >
            <BsTelegram size={42} className="text-cyan-300 group-hover:text-amber-300 duration-300" />
            <span className="text-lg font-semibold">{CONTACT.telegramLabel}</span>
            <span className="text-sm text-gray-300">Message me on Telegram</span>
          </a>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
