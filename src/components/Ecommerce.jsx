import React from 'react';
import ecommerceImg1 from '../assets/portfolio/ecommerce.png';
import ecommerceImg2 from '../assets/portfolio/navbar.jpg';
import ecommerceImg3 from '../assets/portfolio/reactSmooth.jpg';

const Ecommerce = () => {
  return (
    <div name='ecommerce' className='w-full min-h-screen bg-gradient-to-b from-black to-blue-900 text-white py-16 pt-32 lg:pt-36'>
      <div className='max-w-screen-xl mx-auto px-6 flex flex-col gap-16'>

        {/* Header */}
        <div className='text-center pb-8'>
          <h1 className='text-4xl font-bold'>
            Full-Stack eCommerce Platform
          </h1>
        </div>

        {/* Elevator Pitch */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Elevator Pitch:</h2>
            <p className='text-lg'>
              A fast, responsive, and highly interactive online store that makes browsing and finding products effortless. 
              Developed as a collaborative team project, I led the team in solving technical challenges and optimizing performance.
            </p>
          </div>
          <div className='flex-1'>
            <img src={ecommerceImg1} alt="Elevator Pitch" className='w-full rounded-lg shadow-lg' />
          </div>
        </div>

        {/* Role & Team */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Role & Team:</h2>
            <p className='text-lg'>
              Team project; I served as the team leader, coordinating development, solving technical challenges, assigning tasks, and ensuring smooth collaboration.
            </p>
          </div>
          <div className='flex-1'>
            <img src={ecommerceImg2} alt="Role & Team" className='w-full rounded-lg shadow-lg' />
          </div>
        </div>

        {/* Tech Stack & Skills */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Tech Stack & Skills:</h2>
            <ul className='list-disc list-inside text-lg space-y-1'>
              <li>Frontend: React, responsive UI, advanced product filtering</li>
              <li>Backend: Node.js, Express, GraphQL (with REST fallback for image uploads), PostgreSQL</li>
              <li>Other Tools: Node Mailtrap (email testing for password resets), load balancing, database indexing</li>
            </ul>
          </div>
          <div className='flex-1'>
            <img src={ecommerceImg3} alt="Tech Stack" className='w-full rounded-lg shadow-lg' />
          </div>
        </div>

        {/* Problem Statement */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Problem Statement:</h2>
            <p className='text-lg'>
              Small businesses need an online platform that is fast, intuitive, and scalable. 
              Existing solutions often suffer from slow performance, poor product filtering, and unreliable email testing during development.
            </p>
          </div>
          <div className='flex-1'>
            {/* Placeholder image for problem */}
            <div className='w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg'>
              <span className='text-gray-400'>Problem Image</span>
            </div>
          </div>
        </div>

        {/* Solution / Key Features */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Solution / Key Features:</h2>
            <ul className='list-disc list-inside text-lg space-y-1'>
              <li>Front-end: React-based responsive UI with advanced product filtering and smooth user experience.</li>
              <li>Back-end: Node.js and Express server with GraphQL API for optimized data queries.</li>
              <li>Problem Solving: Encountered issues uploading images via GraphQL; implemented a REST endpoint as a workaround.</li>
              <li>Performance Optimization: Load balancing and database indexing ensured high-speed response times.</li>
              <li>Email Testing: Integrated Node Mailtrap.io for safe email testing (password resets).</li>
            </ul>
          </div>
          <div className='flex-1'>
            {/* Placeholder image for solution */}
            <div className='w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg'>
              <span className='text-gray-400'>Solution Image</span>
            </div>
          </div>
        </div>

        {/* Results / Impact */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Results / Impact:</h2>
            <ul className='list-disc list-inside text-lg space-y-1'>
              <li>Performance: Lightning-fast queries and page loads.</li>
              <li>User Experience: Fully responsive UI with amazing product filtering.</li>
              <li>Team Success: Completed as a high-functioning team under my leadership.</li>
              <li>New Skills Learned: GraphQL, REST fallback, Node Mailtrap, load balancing, indexing.</li>
            </ul>
          </div>
          <div className='flex-1'>
            {/* Placeholder image for results */}
            <div className='w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg'>
              <span className='text-gray-400'>Results Image</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase / Demo Video */}
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex-1'>
            <h2 className='text-2xl font-semibold mb-2'>Visual Showcase / Demo:</h2>
            <ul className='list-disc list-inside text-lg space-y-1'>
              <li>Screenshots: Product listings, filters, responsive pages, admin dashboard.</li>
              <li>Video (optional): Short 60–90 second demo showing browsing → filtering → viewing product details → adding to cart.</li>
              <li>Diagram: Frontend → GraphQL/REST backend → PostgreSQL workflow.</li>
              <li>Metrics Graph: Page load times and response time improvements.</li>
            </ul>
          </div>
          <div className='flex-1'>
            {/* Placeholder for video */}
            <div className='w-full h-64 bg-gray-800 flex items-center justify-center rounded-lg'>
              <span className='text-gray-400'>Video Placeholder</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Ecommerce;
