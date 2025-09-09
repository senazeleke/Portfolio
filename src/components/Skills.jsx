import React from "react";
import Slider from "react-slick";
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
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiGraphql, SiPostgresql, SiPostman, SiFlask } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  const techs = [
    { id: 1, icon: <FaHtml5 size={50} className="text-orange-500" />, title: "HTML" },
    { id: 2, icon: <FaCss3Alt size={50} className="text-blue-500" />, title: "CSS" },
    { id: 3, icon: <FaJsSquare size={50} className="text-yellow-400" />, title: "JavaScript" },
    { id: 4, icon: <FaReact size={50} className="text-blue-400" />, title: "React" },
    { id: 5, icon: <SiTailwindcss size={50} className="text-sky-400" />, title: "Tailwind" },
    { id: 6, icon: <SiNextdotjs size={50} className="text-white" />, title: "Next.js" },
    { id: 7, icon: <FaPython size={50} className="text-yellow-500" />, title: "Python" },
    { id: 8, icon: <SiPostgresql size={50} className="text-sky-700" />, title: "SQL" },
    { id: 9, icon: <SiFlutter size={50} className="text-cyan-400" />, title: "Flutter" },
    { id: 10, icon: <FaNodeJs size={50} className="text-green-500" />, title: "Node.js" },
    { id: 11, icon: <SiGraphql size={50} className="text-pink-500" />, title: "GraphQL" },
    { id: 12, icon: <FaDocker size={50} className="text-blue-500" />, title: "Docker" },
    { id: 13, icon: <SiPostman size={50} className="text-orange-500" />, title: "Postman" },
    { id: 14, icon: <DiVisualstudio size={50} className="text-blue-400" />, title: "VS Code" },
    { id: 15, icon: <FaGithub size={50} className="text-gray-400" />, title: "GitHub" },
    { id: 16, icon: <SiFlask size={50} className="text-gray-200" />, title: "Flask" },
    { id: 17, icon: <FaCogs size={50} className="text-green-400" />, title: "REST API" },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div name="skills" className="bg-gradient-to-b from-black to-blue-900 w-full py-16">
      <div className="max-w-screen-lg mx-auto p-4 text-white">
        <div>
          <p className="text-4xl font-bold inline">
            Skills
          </p>
          <p className="py-6">Technologies and tools I work with</p>
        </div>

        <Slider {...settings} className="py-8">
          {techs.map(({ id, icon, title }) => (
            <div key={id} className="flex flex-col items-center justify-center px-6">
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-110 transition-transform duration-300">
                {icon}
              </div>
              <p className="mt-4 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skill;


// import React from "react";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import javascript from "../assets/javascript.png";
// import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";

// const Skill = () => {
//   const techs = [
//     {
//       id: 1,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 2,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 3,
//       src: javascript,
//       title: "JavaScript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 4,
//       src: reactImage,
//       title: "React",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 5,
//       src: tailwind,
//       title: "Tailwind",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 6,
//       src: nextjs,
//       title: "Next JS",
//       style: "shadow-white",
//     },
//     {
//       id: 8,
//       src: github,
//       title: "GitHub",
//       style: "shadow-gray-400",
//     },
//   ];

//   return (
//     <div
//       name="skills"
//       className="bg-gradient-to-b  from-black to-blue-900 w-full h-screen"
//     >
//       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
//         <div>
//           <p className="text-4xl font-bold p-2 inline">
//             Skills
//           </p>
//           <p className="py-6">These are the technologies I've worked with</p>
//         </div>

//         <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
//           {techs.map(({ id, src, title, style }) => (
//             <div
//               key={id}
//               className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
//             >
//               <img src={src} alt="" className="w-20 mx-auto" />
//               <p className="mt-4">{title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skill;