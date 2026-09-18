import React from 'react';
import { Link } from 'react-router-dom';
import { LAYOUT, PROJECTS, SECTION_IDS } from '../../constants';
import { isInternalPath } from '../../utils/links';
import Reveal from '../ui/Reveal';

const Projects = () => {
  return (
    <div name={SECTION_IDS.projects} className={`relative ${LAYOUT.projectsGradient} w-full text-white py-24`}>
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold section-heading">Projects</h2>
          <p className="mt-6 text-gray-300 text-lg">
            A collection of my favorite works and experiments.
          </p>
        </Reveal>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {PROJECTS.map(({ id, src, title, demo, code }, index) => (
            <Reveal key={id} delay={index * 90}>
              <div className="relative group rounded-xl overflow-hidden shadow-lg shadow-black/40 ring-1 ring-white/10 hover:ring-cyan-400/40 duration-300">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-44 object-cover group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-xl font-semibold mb-3">{title}</h3>
                  <div className="flex gap-4">
                    {isInternalPath(demo) ? (
                      <Link
                        to={demo}
                        className="px-4 py-2 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 duration-200"
                      >
                        Demo
                      </Link>
                    ) : (
                      <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 duration-200"
                      >
                        Demo
                      </a>
                    )}

                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 duration-200"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
