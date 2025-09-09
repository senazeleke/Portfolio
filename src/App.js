import { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skills';
import Contact from './components/Contact';

function App() {
  useEffect(()=> {
    document.title = "Sena's Portfolio"
  }, []);
  return (
    <div className="App">
       <NavBar/>
       <Home/>
       <About/>
        <Skill/>
       <Projects/>
       <Contact/>

    </div>
  );
}

export default App;
