import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import NavBar from '../components/layout/NavBar';
import HomePage from '../pages/HomePage';
import EcommercePage from '../pages/EcommercePage';
import { ROUTES, SITE } from '../constants';

function App() {
  useEffect(() => {
    document.title = SITE.documentTitle;
  }, []);

  return (
    <Router>
      <div className="App relative min-h-screen bg-black">
        <div className="page-atmosphere" aria-hidden="true" />
        <NavBar />
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.ecommerce} element={<EcommercePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
