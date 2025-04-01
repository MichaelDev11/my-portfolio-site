import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faPaperPlane,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faGithub 
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import '../css/ContactMe.css';

const ContactMe = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:perkinsr.mike@gmail.com';
  };

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="contact-content"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="contact-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FontAwesomeIcon icon={faEnvelope} className="header-icon" />
          <h1>Let's Connect!</h1>
        </motion.div>
        
        <motion.p
          className="contact-intro"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm always excited to collaborate on new projects, discuss opportunities, 
          or just connect with fellow tech enthusiasts. Feel free to reach out!
        </motion.p>
        
        <div className="contact-grid">
          <motion.div 
            className="contact-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="contact-card-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3>Email</h3>
            <p>perkinsr.mike@gmail.com</p>
            <motion.button 
              className="contact-button" 
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faPaperPlane} /> Send Email
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="contact-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="contact-card-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h3>Location</h3>
            <p>Tampa / Cocoa, Florida</p>
            <p className="location-detail">Available for remote work nationwide</p>
          </motion.div>
          
          <motion.a 
            href="https://www.linkedin.com/in/michael-perkins-569a31258"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="contact-card-icon linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <h3>LinkedIn</h3>
            <p>Connect with me professionally</p>
            <span className="link-arrow">→</span>
          </motion.a>
          
          <motion.a 
            href="https://github.com/MichaelDev11"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="contact-card-icon github">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <h3>GitHub</h3>
            <p>Check out my code repositories</p>
            <span className="link-arrow">→</span>
          </motion.a>
        </div>
        
        <motion.div 
          className="contact-message"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h3>Looking forward to hearing from you!</h3>
          <p>Whether you have a project in mind or just want to chat about tech, I'll get back to you as soon as possible.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
