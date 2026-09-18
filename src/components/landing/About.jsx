import React from 'react';
import { ABOUT, LAYOUT, SECTION_IDS } from '../../constants';
import Reveal from '../ui/Reveal';

const About = () => {
  return (
    <div name={SECTION_IDS.about} className={`relative w-full min-h-screen ${LAYOUT.aboutGradient} text-white`}>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full min-h-screen py-24">
        <Reveal>
          <p className="text-4xl font-bold section-heading">About</p>
        </Reveal>

        {ABOUT.paragraphs.map((paragraph, index) => (
          <Reveal key={index} delay={140 * (index + 1)}>
            {index > 0 && <br />}
            <p className={`text-xl leading-relaxed text-gray-100 ${index === 0 ? 'mt-16' : 'mt-6'}`}>
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default About;
