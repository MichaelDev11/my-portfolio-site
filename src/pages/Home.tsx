import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDisplay, 
  faRobot, 
  faMicrochip,
  faLocationDot,
  faCalendarDays,
  faGraduationCap,
  faAtom,
  faCar,
  faCode,
  faDumbbell,
  faHandFist
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Michael Perkins - Computer Engineer | Portfolio</title>
        <meta name="description" content="Michael Perkins is a Computer Engineering student at USF with expertise in full-stack development, robotics, and electronic systems. Passionate about creating innovative solutions." />
        <meta name="keywords" content="Michael Perkins, Computer Engineer, Software Developer, Full Stack, React, Node.js, Robotics, Electronics, USF, Portfolio" />
        <meta name="author" content="Michael Perkins" />
        <meta property="og:title" content="Michael Perkins - Computer Engineer | Portfolio" />
        <meta property="og:description" content="Computer Engineering student with expertise in full-stack development, robotics, and electronic systems. Passionate about creating innovative solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mikeperkins.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Michael Perkins - Computer Engineer" />
        <meta name="twitter:description" content="Computer Engineering student with expertise in full-stack development, robotics, and electronic systems." />
      </Helmet>
      <motion.div 
        className="home-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      <motion.div 
        className="about-card"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="profile-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.div
            className="name-container"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <h1>Michael Perkins</h1>
            <div className="role-badge">Computer Engineer</div>
          </motion.div>
          
          <motion.div className="personal-info">
            <motion.div
              className="info-card"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="info-icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <span>21 years old</span>
            </motion.div>
            
            <motion.div
              className="info-card"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="info-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span>Cocoa / Tampa, Florida</span>
            </motion.div>
            
            <motion.div
              className="info-card"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="info-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <span>Computer Engineering Major</span>
            </motion.div>
            
            <motion.div
              className="info-card"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="info-icon">
                <FontAwesomeIcon icon={faAtom} />
              </div>
              <span>Physics Minor</span>
            </motion.div>
            
            <motion.div
              className="social-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/michael-perkins-569a31258"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </motion.a>
              
              <motion.a
                href="https://github.com/MichaelDev11"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="bio-container"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <p className="bio">
              Passionate software developer and engineering student with a deep interest 
              in creating innovative solutions. Experienced in full-stack development, 
              robotics, and electronic systems. Always eager to learn and tackle new 
              challenges in technology.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        />

        <motion.div 
          className="specialties-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <span className="highlight">My Specialties</span>
          </motion.h2>
          
          <div className="specialties-grid">
            {[
              { 
                icon: faDisplay, 
                title: "Full Stack Development",
                description: "Proficient in building complete web applications using modern technologies like React, Node.js, and various databases. Experienced in creating responsive, user-friendly interfaces and robust backend systems."
              },
              { 
                icon: faRobot, 
                title: "Robotics",
                description: "Experienced in designing and programming autonomous systems, working with sensors and actuators, and implementing control algorithms. Skilled in ROS and various robotics platforms."
              },
              { 
                icon: faMicrochip, 
                title: "Circuitry",
                description: "Knowledgeable in electronic circuit design, PCB layout, and microcontroller programming. Experienced with Arduino, ESP32, and various electronic components and testing equipment."
              }
            ].map((specialty, index) => (
              <motion.div 
                key={specialty.title}
                className="specialty-card"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 + (index * 0.2), duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="specialty-icon">
                  <FontAwesomeIcon icon={specialty.icon} />
                </div>
                <h3>{specialty.title}</h3>
                <p>{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.9, duration: 0.7 }}
        />

        <motion.div 
          className="hobbies-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.h2
            className="section-title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            <span className="highlight">My Hobbies</span>
          </motion.h2>
          
          <div className="hobbies-grid">
            {[
              { icon: faCar, title: "Automotive", description: "Passionate about working on cars, from basic maintenance to performance modifications and custom builds." },
              { icon: faMicrochip, title: "Electronics", description: "Love tinkering with electronics, building custom circuits, and exploring new hardware projects in my free time." },
              { icon: faCode, title: "Coding", description: "Enjoy developing personal projects and learning new programming languages and technologies." },
              { icon: faDumbbell, title: "Fitness", description: "Dedicated to maintaining physical fitness through regular gym workouts and strength training." },
              { icon: faHandFist, title: "Combat Sports", description: "Active practitioner of Brazilian Jiu-Jitsu and Boxing, focusing on technique and physical conditioning." }
            ].map((hobby, index) => (
              <motion.div 
                key={hobby.title}
                className="hobby-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 + (index * 0.1), duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="hobby-icon">
                  <FontAwesomeIcon icon={hobby.icon} />
                </div>
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
    </>
  );
};

export default Home;
