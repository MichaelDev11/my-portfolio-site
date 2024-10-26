import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGaugeHigh,
  faGraduationCap,
  faBriefcase,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../css/Experience.css';

const Experience = () => {
  const skills = [
    { name: "React/TypeScript", level: 65, icon: "🌐" },
    { name: "Python", level: 85, icon: "🐍" },
    { name: "C++", level: 70, icon: "⚡" },
    { name: "C", level: 75, icon: "🔧" },
    { name: "Node.js", level: 60, icon: "📦" },
    { name: "Java", level: 30, icon: "☕" },
  ];

  const getLevelLabel = (level: number) => {
    if (level >= 80) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <motion.div 
      className="experience-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="experience-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="intro-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p>
            Dedicated Computer Engineering student with hands-on experience in software development,
            robotics, and electronic systems. Passionate about creating innovative solutions and
            continuously expanding technical expertise.
          </p>
          <motion.button 
            className="resume-button"
            onClick={() => window.open('/resume.pdf', '_blank')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ 
              y: -2,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ y: 0 }}
          >
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </motion.button>
        </motion.div>

        <motion.div 
          className="skills-section"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="section-header">
            <FontAwesomeIcon icon={faGaugeHigh} className="header-icon" />
            <h2>Technical Skills</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name} 
                className="skill-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-details">
                  <h3>{skill.name}</h3>
                  <span className={`skill-level ${getLevelLabel(skill.level).toLowerCase()}`}>
                    {getLevelLabel(skill.level)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="divider"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        <motion.div 
          className="career-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="education-container">
            <div className="section-header">
              <FontAwesomeIcon icon={faGraduationCap} className="header-icon" />
              <h2>Education</h2>
            </div>
            <div className="timeline">
              <motion.div 
                className="timeline-item"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <h3>University of South Florida</h3>
                <p className="timeline-date">2022 - Present</p>
                <p>B.S. Computer Engineering</p>
                <p>Minor in Physics</p>
              </motion.div>
              <motion.div 
                className="timeline-item"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <h3>Cocoa Beach High School</h3>
                <p className="timeline-date">2018 - 2022</p>
                <p>High School Diploma</p>
                <p>International Baccalaureate Diploma</p>
              </motion.div>
            </div>
          </div>

          <div className="work-container">
            <div className="section-header">
              <FontAwesomeIcon icon={faBriefcase} className="header-icon" />
              <h2>Work Experience</h2>
            </div>
            <div className="timeline">
              <motion.div 
                className="timeline-item"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <h3>Founder & Developer</h3>
                <p className="timeline-date">2024 - Present</p>
                <p>StartUpGeniusAI</p>
                <ul>
                  <li>Developed full-stack web applications using React and Node.js</li>
                  <li>Implemented AI integration using OpenAI's API</li>
                  <li>Managed database architecture and API development</li>
                </ul>
              </motion.div>
              <motion.div 
                className="timeline-item"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <h3>Student Tutor</h3>
                <p className="timeline-date">2024 - Present</p>
                <p>SMART Lab</p>
                <ul>
                  <li>Tutor students in math such as finite math, pre-calculus, and college algebra</li>
                </ul>
              </motion.div>
              <motion.div 
                className="timeline-item"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <h3>Sales Associate (SUMMER)</h3>
                <p className="timeline-date">2023 - 2023</p>
                <p>Lowe's Home Improvement</p>
                <ul>
                  <li>Assisted customers with their home improvement needs</li>
                  <li>Stocked shelves and restocked merchandise</li>
                  <li>Maintained a clean and organized sales floor</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
