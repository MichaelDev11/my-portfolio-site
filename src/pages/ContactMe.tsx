import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
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
        className="contact-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="contact-icon"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Let's Connect!
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Have a question or want to discuss potential opportunities? 
          I'm always excited to connect with companies, fellow developers and tech enthusiasts.
        </motion.p>
        
        <motion.button 
          className="email-button" 
          onClick={handleEmailClick}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Send me an email
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
