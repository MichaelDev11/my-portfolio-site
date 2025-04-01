import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faCode, 
  faBriefcase, 
  faMessage
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../css/nav.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { path: '/', icon: faUser, text: 'About Me' },
    { path: '/projects', icon: faCode, text: 'Projects' },
    { path: '/experience', icon: faBriefcase, text: 'Experience' },
    { path: '/contact-me', icon: faMessage, text: 'Contact Me' }
  ];

  return (
    <>
      <nav className={`vertical-nav ${isMobile ? 'hidden' : ''}`}>
        <div className="nav-logo">MP</div>
        <ul>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.path}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <NavLink 
                to={item.path} 
                className={({ isActive }) => {
                  return isActive ? 'nav-link active' : 'nav-link';
                }}
              >
                <div className="icon-container">
                  <FontAwesomeIcon icon={item.icon} className="icon" />
                  {location.pathname === item.path && (
                    <motion.div 
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                <span className="tooltip-text">{item.text}</span>
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <div className="nav-footer">
          <span>© 2025</span>
        </div>
      </nav>

      {isMobile && (
        <div className="bottom-nav">
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path} 
              className={({ isActive }) => 
                isActive ? 'bottom-nav-link active' : 'bottom-nav-link'
              }
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="bottom-link-text">{item.text}</span>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;