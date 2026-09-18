import React from "react";
import ecommerce from "../assets/portfolio/ecommerce.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import {Link} from 'react-router-dom';


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: ecommerce,
      title: "Full-Stack eCommerce Platfrom",
      demo: "/ecommerce",
      code: "https://github.com/senazeleke/ECommerce-Shop",
    },
    {
      id: 2,
      src: reactParallax,
      title: "Parallax Scroll Effect",
      demo: "#",
      code: "#",
    },
    {
      id: 3,
      src: navbar,
      title: "Responsive Navbar",
      demo: "#",
      code: "#",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "Smooth Scroll Website",
      demo: "#",
      code: "#",
    },
    {
      id: 5,
      src: installNode,
      title: "Node.js Installer",
      demo: "#",
      code: "#",
    },
    {
      id: 6,
      src: reactWeather,
      title: "Weather App",
      demo: "#",
      code: "#",
    },
  ];

  const links=[
    {
      id: 1,
      link: 'ecommerce'
    },
  ]

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-blue-900 w-full text-white py-16"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold inline-block pb-2">
            Projects
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            A collection of my favorite works and experiments.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(({ id, src, title, demo, code }) => (
            <div
              key={id}
              className="relative group rounded-xl overflow-hidden shadow-lg shadow-gray-700"
            >
              <img
                src={src}
                alt={title}
                className="w-full h-44 object-cover group-hover:scale-110 duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <div className="flex gap-4">
                  {demo.startsWith('/') ? (
                    <Link
                      to={demo}
                      className="px-4 py-2 bg-aamber-500 text-black font-medium rounded-lg hover:bg-amber-400 duration-200"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
