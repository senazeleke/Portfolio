import ecommerce from '../assets/portfolio/ecommerce.png';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';
import { ROUTES } from './routes';

export const PROJECTS = [
  {
    id: 1,
    src: ecommerce,
    title: 'Full-Stack eCommerce Platfrom',
    demo: ROUTES.ecommerce,
    code: 'https://github.com/senazeleke/ECommerce-Shop',
  },
  {
    id: 2,
    src: reactParallax,
    title: 'Parallax Scroll Effect',
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    src: navbar,
    title: 'Responsive Navbar',
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    src: reactSmooth,
    title: 'Smooth Scroll Website',
    demo: '#',
    code: '#',
  },
  {
    id: 5,
    src: installNode,
    title: 'Node.js Installer',
    demo: '#',
    code: '#',
  },
  {
    id: 6,
    src: reactWeather,
    title: 'Weather App',
    demo: '#',
    code: '#',
  },
];
