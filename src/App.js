import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skills';
import Contact from './components/Contact';
import Ecommerce from './components/Ecommerce'; 

function App() {
  useEffect(() => {
    document.title = "Sena's Portfolio";
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skill />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/ecommerce" element={<Ecommerce />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import { useEffect } from 'react';
// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
// import Skill from './components/Skills';
// import Contact from './components/Contact';
// import eCommerce from './components/ecommereDemo';

// function App() {
//   useEffect(()=> {
//     document.title = "Sena's Portfolio"
//   }, []);
//   return (
//     <div className="App">
//        <NavBar/>
//        <Home/>
//        <About/>
//         <Skill/>
//        <Projects/>
//        <Contact/>
//        <eCommerce/>

//     </div>
//   );
// }

// export default App;
