import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faBriefcase, faMessage } from '@fortawesome/free-solid-svg-icons';
import '../css/nav.css';

const Navbar = () => {
  return (
    <nav className="vertical-nav">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <div className="icon-container">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <span className="link-text">About Me</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <div className="icon-container">
              <FontAwesomeIcon icon={faCode} className="icon" />
              <span className="link-text">Projects</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <div className="icon-container">
              <FontAwesomeIcon icon={faBriefcase} className="icon" />
              <span className="link-text">Experience</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-me" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <div className="icon-container">
              <FontAwesomeIcon icon={faMessage} className="icon" />
              <span className="link-text">Contact Me</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;