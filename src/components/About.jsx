import React from 'react';


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-black to-blue-900 text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline'>
            About
          </p>
        </div>

        <p className='text-xl mt-20'> 
       Hello, I'm Sena Zeleke, a Full-Stack Web and Mobile App Developer passionate about creating innovative solutions and delivering seamless user experiences. I recently graduated from Jimma University, where I honed my skills in both web and mobile development.
       
       On the web, I build responsive and dynamic applications using React, Node.js, Tailwind CSS, CSS, and GraphQL. For mobile apps, I develop cross-platform solutions with Flutter, backed by Flask and Python, and I am exploring AI integration to build smarter applications.
        </p>

        <br/>
        <p className='text-xl'>
          I am also skilled in data structures, writing efficient and scalable code, and I thrive on collaboration and clear communication to deliver high-impact projects. I am committed to continuous learning and contributing to meaningful software solutions that make a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
