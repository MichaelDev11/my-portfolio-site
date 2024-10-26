import React from 'react';
import { motion } from 'framer-motion';
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
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Home.css';

const Home = () => {
  return (
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
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            Michael Perkins
          </motion.h1>
          
          <motion.div className="personal-info">
            {[
              "20 years old",
              "Tampa, Florida", 
              "Computer Engineering Major", 
              "Physics Minor",
              { text: "LinkedIn", link: "https://www.linkedin.com/in/michael-perkins-569a31258" }  // Replace with your LinkedIn URL
            ].map((item, index) => (
              <motion.span
                key={typeof item === 'string' ? item : item.text}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
              >
                {index === 0 && <FontAwesomeIcon icon={faCalendarDays} />}
                {index === 1 && <FontAwesomeIcon icon={faLocationDot} />}
                {index === 2 && <FontAwesomeIcon icon={faGraduationCap} />}
                {index === 3 && <FontAwesomeIcon icon={faAtom} />}
                {index === 4 && (
                  <a 
                    href={(item as {link: string}).link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                    {" LinkedIn"}
                  </a>
                )}
                {index < 4 && " " + item}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            className="bio"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Passionate software developer and engineering student with a deep interest 
            in creating innovative solutions. Experienced in full-stack development, 
            robotics, and electronic systems. Always eager to learn and tackle new 
            challenges in technology.
          </motion.p>
        </motion.div>

        <motion.div 
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        />

        <motion.div 
          className="specialties-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            My Specialties
          </motion.h2>
          
          <div className="specialties-grid">
            {[
              { icon: faDisplay, title: "Full Stack Development" },
              { icon: faRobot, title: "Robotics" },
              { icon: faMicrochip, title: "Circuitry" }
            ].map((specialty, index) => (
              <motion.div 
                key={specialty.title}
                className="specialty-card"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 + (index * 0.2), duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="specialty-icon">
                  <FontAwesomeIcon icon={specialty.icon} />
                </div>
                <h3>{specialty.title}</h3>
                <p>
                  Proficient in building complete web applications using modern 
                  technologies like React, Node.js, and various databases. 
                  Experienced in creating responsive, user-friendly interfaces 
                  and robust backend systems.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.7 }}
        />

        <motion.div 
          className="hobbies-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            My Hobbies
          </motion.h2>
          
          <div className="hobbies-grid">
            {[
              { icon: faCar, title: "Automotive" },
              { icon: faMicrochip, title: "Electronics" },
              { icon: faCode, title: "Coding" },
              { icon: faDumbbell, title: "Fitness" },
              { icon: faHandFist, title: "Combat Sports" }
            ].map((hobby, index) => (
              <motion.div 
                key={hobby.title}
                className="hobby-card"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 2.1 + (index * 0.1), duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="hobby-icon">
                  <FontAwesomeIcon icon={hobby.icon} />
                </div>
                <h3>{hobby.title}</h3>
                <p>
                  {hobby.title === "Automotive" && "Passionate about working on cars, from basic maintenance to performance modifications and custom builds."}
                  {hobby.title === "Electronics" && "Love tinkering with electronics, building custom circuits, and exploring new hardware projects in my free time."}
                  {hobby.title === "Coding" && "Enjoy developing personal projects and learning new programming languages and technologies."}
                  {hobby.title === "Fitness" && "Dedicated to maintaining physical fitness through regular gym workouts and strength training."}
                  {hobby.title === "Combat Sports" && "Active practitioner of Brazilian Jiu-Jitsu and Boxing, focusing on technique and physical conditioning."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
