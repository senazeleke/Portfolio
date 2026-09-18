import React from 'react';
import Slider from 'react-slick';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaPython,
  FaCogs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiGraphql,
  SiPostgresql,
  SiPostman,
  SiFlask,
} from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LAYOUT, SECTION_IDS, SKILLS, SKILL_SLIDER_SETTINGS } from '../../constants';
import Reveal from '../ui/Reveal';

const SKILL_ICONS = {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaPython,
  FaCogs,
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiGraphql,
  SiPostgresql,
  SiPostman,
  SiFlask,
  DiVisualstudio,
};

const Skills = () => {
  return (
    <div name={SECTION_IDS.skills} className={`relative ${LAYOUT.skillsGradient} w-full py-24`}>
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <Reveal>
          <p className="text-4xl font-bold section-heading">Skills</p>
          <p className="py-6 text-gray-300">Technologies and tools I work with</p>
        </Reveal>

        <Reveal delay={160}>
          <Slider {...SKILL_SLIDER_SETTINGS} className="py-8">
            {SKILLS.map(({ id, icon, iconClass, title }) => {
              const Icon = SKILL_ICONS[icon];
              return (
                <div key={id} className="flex flex-col items-center justify-center px-6">
                  <div className="bg-gray-900/80 p-6 rounded-2xl shadow-lg ring-1 ring-cyan-400/20 hover:ring-amber-400/50 hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon size={50} className={iconClass} />}
                  </div>
                  <p className="mt-4 text-lg font-semibold">{title}</p>
                </div>
              );
            })}
          </Slider>
        </Reveal>
      </div>
    </div>
  );
};

export default Skills;
