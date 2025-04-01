import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGaugeHigh,
  faGraduationCap,
  faBriefcase,
  faDownload,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../css/Experience.css';

const Experience = () => {

  const courses = [
    "Computer System Design",
    "Control of Mobile Robotics",
    "Computer Architecture",
    "Computer Logic and Design",
    "Hardware Accelerators for Machine Learning"
  ];

  return (
    <div className="experience-container">
      <div className="experience-content">
        <div className="intro-section">
          <p>
            Dedicated Computer Engineering student with hands-on experience in software development,
            robotics, and electronic systems. Passionate about creating innovative solutions and
            continuously expanding technical expertise.
          </p>
          <motion.button 
            className="resume-button"
            onClick={() => window.open('/resume.pdf', '_blank')}
            whileHover={{ 
              y: -2,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ y: 0 }}
          >
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </motion.button>
        </div>

        <div className="skills-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faGaugeHigh} className="header-icon1" />
            <h2>Technical Skills</h2>
          </div>
          
          <div className="skill-categories" style={{ marginTop: "3rem" }}>
            <div className="skill-category">
              <h3>
                <span className="skill-category-icon">💻</span>
                Languages
              </h3>
              <ul className="skill-list">
                <li><span className="skill-icon-small">🔌</span> <span className="skill-highlight">Verilog</span></li>
                <li><span className="skill-icon-small">🐍</span> <span className="skill-highlight">Python</span></li>
                <li><span className="skill-icon-small">⚡</span> <span className="skill-highlight">C/C++</span></li>
                <li><span className="skill-icon-small">🌐</span> <span className="skill-highlight">JavaScript/TypeScript</span></li>
                <li><span className="skill-icon-small">☕</span> Java</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>
                <span className="skill-category-icon">⚛️</span>
                Frontend
              </h3>
              <ul className="skill-list">
                <li><span className="skill-icon-small">⚛️</span> <span className="skill-highlight">React</span></li>
                <li><span className="skill-icon-small">📱</span> <span className="skill-highlight">Responsive Design</span></li>
                <li><span className="skill-icon-small">🎨</span> <span className="skill-highlight">CSS/SCSS</span></li>
                <li><span className="skill-icon-small">🧩</span> <span className="skill-highlight">Component Design</span></li>
                <li><span className="skill-icon-small">🔄</span> <span className="skill-highlight">API Integration</span></li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>
                <span className="skill-category-icon">🚀</span>
                Backend
              </h3>
              <ul className="skill-list">
                <li><span className="skill-icon-small">📦</span> <span className="skill-highlight">Node.js</span></li>
                <li><span className="skill-icon-small">🚀</span> <span className="skill-highlight">Express.js</span></li>
                <li><span className="skill-icon-small">🗄️</span> <span className="skill-highlight">MongoDB</span></li>
                <li><span className="skill-icon-small">💾</span> <span className="skill-highlight">Database Design</span></li>
                <li><span className="skill-icon-small">🔐</span> <span className="skill-highlight">Authentication</span></li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>
                <span className="skill-category-icon">🔧</span>
                Hardware
              </h3>
              <ul className="skill-list">
                <li><span className="skill-icon-small">🖥️</span> Spartan 6 FPGA</li>
                <li><span className="skill-icon-small">🔋</span> Arduino</li>
                <li><span className="skill-icon-small">🥧</span> Raspberry Pi</li>
                <li><span className="skill-icon-small">💻</span> RISC-V</li>
                <li><span className="skill-icon-small">🔌</span> Embedded Systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="career-section">
          <div className="education-container">
            <div className="section-header">
              <FontAwesomeIcon icon={faGraduationCap} className="header-icon1" />
              <h2>Education</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <h3>University of South Florida</h3>
                <p className="timeline-date">2022 - December 2025</p>
                <p>B.S. Computer Engineering</p>
                <p>Minor in Physics</p>
                <p>GPA: 3.56</p>
                <div style={{ marginTop: "1rem" }}>
                  <h4>Relevant Coursework:</h4>
                  <ul>
                    {courses.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <h3>Cocoa Beach High School</h3>
                <p className="timeline-date">2018 - 2022</p>
                <p>High School Diploma</p>
                <p>International Baccalaureate Diploma</p>
              </div>
            </div>
          </div>

          <div className="work-container">
            <div className="section-header">
              <FontAwesomeIcon icon={faBriefcase} className="header-icon1" />
              <h2>Work Experience</h2>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Dedicated Engineer</h3>
                <p className="timeline-date">2024 - Present</p>
                <p>
                  AvaAI{" "}
                  <a 
                    href="https://joinava.ai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      color: "#4f46e5", 
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem"
                    }}
                  >
                  </a>
                </p>
                <ul>
                  <li>Led the development of an AI-powered e-commerce platform that transforms brick-and-mortar businesses into fully operational online stores</li>
                  <li>Built custom storefront generation system using React, TypeScript, and Node.js, reducing traditional development time from weeks to minutes</li>
                  <li>Integrated agentic AI solutions enabling non-technical users to manage inventory and operations through natural language conversations</li>
                  <li>Implemented scalable backend architecture supporting multi-tenant platform capabilities</li>
                </ul>
              </div>
              
              <div className="timeline-item">
                <h3>Founder & Developer</h3>
                <p className="timeline-date">2024 - Present</p>
                <p>StartUpGeniusAI</p>
                <ul>
                  <li>Developed full-stack web applications using React and Node.js</li>
                  <li>Implemented AI integration using OpenAI's API</li>
                  <li>Managed database architecture and API development</li>
                  <li>Note: This is more of a project now that I have moved on from the idea</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h3>Smart Lab Tutor</h3>
                <p className="timeline-date">2024 - Present</p>
                <p>University of South Florida</p>
                <ul>
                  <li>Collaborate closely with fellow tutors to provide support for hundreds of students</li>
                  <li>Tutor students in math such as Pre-Calculus, College Algebra, and Finite Math</li>
                </ul>
              </div>
              <div className="timeline-item">
                <h3>Sales Associate (SUMMER)</h3>
                <p className="timeline-date">2023 - 2023</p>
                <p>Lowe's Home Improvement</p>
                <ul>
                  <li>Assisted customers with their home improvement needs</li>
                  <li>Stocked shelves and restocked merchandise</li>
                  <li>Maintained a clean and organized sales floor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="awards-section">
          <div className="section-header">
            <FontAwesomeIcon icon={faTrophy} className="header-icon1" />
            <h2>Awards & Certifications</h2>
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <motion.li 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              style={{ 
                padding: "1rem",
                background: "white",
                borderRadius: "10px",
                marginBottom: "1rem",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                borderLeft: "4px solid #4f46e5"
              }}
            >
              <h3 style={{ margin: 0 }}>International Baccalaureate Diploma</h3>
              <p style={{ color: "#4f46e5", fontWeight: 500 }}>The International Baccalaureate Organization</p>
            </motion.li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
