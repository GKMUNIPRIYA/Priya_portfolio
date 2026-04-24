import React, { useState } from 'react';
import profileImg from './assets/profile.jpeg';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
    backend: ['Django', 'Node.js', 'ExpressJS', 'PHP'],
    database: ['MySQL', 'MongoDB'],
    tools: ['Arduino', 'Embedded C', 'TypeScript']
  };

  const projects = [
    {
      title: 'TerraKind E-Commerce Website',
      description: 'A full-stack eco-friendly e-commerce platform with product management, shopping cart, checkout, and admin dashboard. Implemented blog system, feedback management, and automated email notifications.',
      tools: ['React.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
      link: 'https://eco-friendly-living-blog.vercel.app/'
    },
    {
      title: 'E-commerce Herbal Products Website',
      description: 'Designed and developed a shopping platform with a focus on user-friendly navigation and clean interface.',
      tools: ['Django', 'MySQL']
    },
    {
      title: 'IoT Fish Feeding and Water Level Indicator',
      description: 'Developed an automated fish feeding and water level monitoring system using ultrasonic sensor and servo motor with alarm alerts.',
      tools: ['Arduino', 'Embedded C', 'Sensors']
    }
  ];

  const education = [
    {
      year: 'Expected 2025',
      degree: 'Master of Computer Applications (MCA)',
      school: 'Ayya Nadar Janaki Ammal College, Madurai Kamaraj University',
      score: 'CGPA: 82%'
    },
    {
      year: '2024',
      degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
      school: 'Sri Kaliswari College, Madurai Kamaraj University',
      score: '82.40%'
    },
    {
      year: '2021',
      degree: 'Higher Secondary Certificate (HSC)',
      school: 'K.S.G. Government Higher Secondary School, State Board',
      score: '82.33%'
    },
    {
      year: '2019',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      school: 'S.N. (JR) Government High School, State Board',
      score: '76%'
    }
  ];

  return (
    <div className="portfolio">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <nav>
        <div className="container nav-content">
          <a href="#" className="logo">MUNIPRIYA<span className="gradient-text">.G</span></a>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      <section id="about" className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-subtitle">Full Stack Developer</span>
            <h1 className="hero-title">
              Crafting Digital <br />
              <span className="gradient-text">Experiences.</span>
            </h1>
            <p className="hero-description">
              Eager to begin my career as a Full Stack Developer, leveraging my skills in React, Node.js, MongoDB, MySQL, and PHP to build dynamic and scalable web applications.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">Let's Connect</a>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src={profileImg}
              alt="Munipriya G"
              className="profile-img"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical <span className="gradient-text">Excellence</span></h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul className="skill-list">
                {skills.frontend.map(skill => <li key={skill} className="skill-tag">{skill}</li>)}
              </ul>
            </div>
            <div className="skill-card">
              <h3>Backend</h3>
              <ul className="skill-list">
                {skills.backend.map(skill => <li key={skill} className="skill-tag">{skill}</li>)}
              </ul>
            </div>
            <div className="skill-card">
              <h3>Database</h3>
              <ul className="skill-list">
                {skills.database.map(skill => <li key={skill} className="skill-tag">{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured <span className="gradient-text">Work</span></h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-info">
                  <h3>
                    {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        {project.title} <span className="link-arrow">↗</span>
                      </a>
                    ) : project.title}
                  </h3>
                  <p>{project.description}</p>
                  <div className="project-tools">
                    {project.tools.map(tool => <span key={tool} className="tool">{tool}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education <span className="gradient-text">Journey</span></h2>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div key={index} className="edu-item">
                <div className="edu-year">{edu.year}</div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-school">{edu.school}</p>
                <p className="edu-score">{edu.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h2>Let's Start a <br /><span className="gradient-text">Conversation</span></h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                I am currently looking for new opportunities. My inbox is always open.
              </p>

              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p><a href="mailto:gmunipriya@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>gmunipriya@gmail.com</a></p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p><a href="tel:+919342911971" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9342911971</a></p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>Vellur, Virudhunagar, Tamil Nadu</p>
                </div>
              </div>
            </div>
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/g-munipriya-279744316/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                LinkedIn Profile
              </a>
              <a href="https://github.com/GKMUNIPRIYA" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                GitHub Profile
              </a>
              <a href="mailto:gmunipriya@gmail.com" className="btn btn-outline">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Munipriya G. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
