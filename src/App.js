import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Navbar from './components/nav.tsx';
import Projects from './pages/Projects.tsx';
import Experience from './pages/Experience.tsx';
import ContactMe from './pages/ContactMe.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function App() {
  return (
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
  );
}

export default App;
