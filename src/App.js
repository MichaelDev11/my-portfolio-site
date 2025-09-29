import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home.tsx';
import Navbar from './components/nav.tsx';
import Projects from './pages/Projects.tsx';
import Experience from './pages/Experience.tsx';
import ContactMe from './pages/ContactMe.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
