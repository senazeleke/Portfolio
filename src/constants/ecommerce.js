import ecommerceImg1 from '../assets/portfolio/ecommerce.png';
import ecommerceImg2 from '../assets/portfolio/navbar.jpg';
import ecommerceImg3 from '../assets/portfolio/reactSmooth.jpg';

export const ECOMMERCE_CASE_STUDY = {
  title: 'Full-Stack eCommerce Platform',
  sections: [
    {
      heading: 'Elevator Pitch:',
      body: 'A fast, responsive, and highly interactive online store that makes browsing and finding products effortless. Developed as a collaborative team project, I led the team in solving technical challenges and optimizing performance.',
      image: ecommerceImg1,
      imageAlt: 'Elevator Pitch',
    },
    {
      heading: 'Role & Team:',
      body: 'Team project; I served as the team leader, coordinating development, solving technical challenges, assigning tasks, and ensuring smooth collaboration.',
      image: ecommerceImg2,
      imageAlt: 'Role & Team',
    },
    {
      heading: 'Tech Stack & Skills:',
      items: [
        'Frontend: React, responsive UI, advanced product filtering',
        'Backend: Node.js, Express, GraphQL (with REST fallback for image uploads), PostgreSQL',
        'Other Tools: Node Mailtrap (email testing for password resets), load balancing, database indexing',
      ],
      image: ecommerceImg3,
      imageAlt: 'Tech Stack',
    },
    {
      heading: 'Problem Statement:',
      body: 'Small businesses need an online platform that is fast, intuitive, and scalable. Existing solutions often suffer from slow performance, poor product filtering, and unreliable email testing during development.',
      placeholder: 'Problem Image',
    },
    {
      heading: 'Solution / Key Features:',
      items: [
        'Front-end: React-based responsive UI with advanced product filtering and smooth user experience.',
        'Back-end: Node.js and Express server with GraphQL API for optimized data queries.',
        'Problem Solving: Encountered issues uploading images via GraphQL; implemented a REST endpoint as a workaround.',
        'Performance Optimization: Load balancing and database indexing ensured high-speed response times.',
        'Email Testing: Integrated Node Mailtrap.io for safe email testing (password resets).',
      ],
      placeholder: 'Solution Image',
    },
    {
      heading: 'Results / Impact:',
      items: [
        'Performance: Lightning-fast queries and page loads.',
        'User Experience: Fully responsive UI with amazing product filtering.',
        'Team Success: Completed as a high-functioning team under my leadership.',
        'New Skills Learned: GraphQL, REST fallback, Node Mailtrap, load balancing, indexing.',
      ],
      placeholder: 'Results Image',
    },
    {
      heading: 'Visual Showcase / Demo:',
      items: [
        'Screenshots: Product listings, filters, responsive pages, admin dashboard.',
        'Video (optional): Short 60–90 second demo showing browsing → filtering → viewing product details → adding to cart.',
        'Diagram: Frontend → GraphQL/REST backend → PostgreSQL workflow.',
        'Metrics Graph: Page load times and response time improvements.',
      ],
      placeholder: 'Video Placeholder',
    },
  ],
};
