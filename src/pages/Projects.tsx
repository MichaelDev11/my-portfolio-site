import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faGlobe, 
    faDesktop, 
    faRobot,
    faLink,
    faLayerGroup
  } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../css/Projects.css';
import { motion, AnimatePresence } from 'framer-motion';

type ProjectType = 'all' | 'web' | 'software' | 'robotics';

interface Project {
  id: number;
  title: string;
  description: string;
  type: ProjectType;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Optimized Cache System",
    description: "An AI-driven cache management system using Xilinx ISE and Verilog. The system optimizes cache performance by leveraging reinforcement learning to predict which data should be retained in cache for improved hit rates.",
    type: "software",
    technologies: ["Verilog", "Xilinx ISE", "Cache Design", "AI", "FPGA", "Machine Learning"],
    githubLink: "https://github.com/MichaelDev11/ai-cache",
    image: "/ai_cache_system.svg"
  },
  {
    id: 2,
    title: "AvaAI",
    description: "Multi-tenant e-commerce platform with agentic AI solutions. Enables non-technical users to build complete storefronts and manage inventory through natural language conversation. Transforms brick-and-mortar businesses into operational online stores in minutes.",
    type: "web",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AI", "E-commerce"],
    liveLink: "https://joinava.ai",
    image: "/avaai_logo.svg"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React and TypeScript",
    type: "web",
    technologies: ["React", "TypeScript", "CSS"],
    githubLink: "https://github.com/MichaelDev11/my-portfolio-site",
    liveLink: "https://mikeperkins.xyz",
    image: "/portfolio_logo.svg"
  },
  {
    id: 4,
    title: "StartUpGeniusAI",
    description: "StartUpGeniusAI is an AI-powered platform that turns user ideas into customized business plans, offering product suggestions, strategies, and marketing insights. Premium users gain access to detailed market trends, personalized consulting, and an exclusive forum.",
    type: "web",
    technologies: ["Vite", "TypeScript", "CSS", "Node.js", "Express", "MongoDB", "Stripe", "OpenAI"],
    liveLink: "https://startupgeniusai.com",
    image: "/startupgeniusai.png"
  },
  {
    id: 5,
    title: "PasswordManager",
    description: "Developed a C++ Password Manager with secure password generation, Caesar cipher encryption, and a user-friendly authentication system. Mentored students on programming fundamentals and C++ best practices.",
    type: "software",
    technologies: ["C++"],
    githubLink: "https://github.com/MichaelDev11/Password-Manager",
    image: "/password_manager_logo.svg"
  },
  {
    id: 6,
    title: "Student Management System",
    description: "Developed a C-based Student Management System with a menu-driven interface. The system allows for student information, course information, and more.",
    type: "software",
    technologies: ["C"],
    githubLink: "https://github.com/MichaelDev11/Student-Management-System",
    image: "/sms_logo.svg"
  },
  {
    id: 7,
    title: "NOVA Smart Home Assistance",
    description: "Building a multi-display smart assistant on Raspberry Pi with screens for clock, weather, and diagnostics, plus voice-controlled power-saving. Integrating custom sensors for real-time environmental monitoring.",
    type: "robotics",
    technologies: ["Ongoing", "Python", "Raspberry Pi", "BS4", "VRM"],
    image: "/nova_logo.svg"
  },
  {
    id: 8,
    title: "DistaCharge",
    description: "Researching an ongoing project to develop wireless charging at a distance. Exploring methods like Magnetic Induction and Resonant Inductive Coupling to create a desk-mounted device that directs magnetic waves for efficient, targeted charging.",
    type: "robotics",
    technologies: ["Researching", "Ongoing"],
    image: "/DistaCharge.svg"
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectType>('all');

  const filterProjects = (type: ProjectType) => {
    setActiveFilter(type);
  };

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.type === activeFilter
  );

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="projects-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <motion.div 
          className="filter-buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button 
            className={activeFilter === 'all' ? 'active' : ''} 
            onClick={() => filterProjects('all')}
          >
            <FontAwesomeIcon icon={faLayerGroup} /> All Projects
          </button>
          <button 
            className={activeFilter === 'web' ? 'active' : ''} 
            onClick={() => filterProjects('web')}
          >
            <FontAwesomeIcon icon={faGlobe} /> Web Applications
          </button>
          <button 
            className={activeFilter === 'software' ? 'active' : ''} 
            onClick={() => filterProjects('software')}
          >
            <FontAwesomeIcon icon={faDesktop} /> Software Applications
          </button>
          <button 
            className={activeFilter === 'robotics' ? 'active' : ''} 
            onClick={() => filterProjects('robotics')}
          >
            <FontAwesomeIcon icon={faRobot} /> Robotics & Electronics
          </button>
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div 
            className="projects-grid"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} /> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLink} /> Live Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
