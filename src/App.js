import React, { useState } from 'react';
import './App.css';
import { 
  FaPalette, 
  FaCode, 
  FaBolt, 
  FaRocket, 
  FaMobile, 
  FaLightbulb,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaUser,
  FaGitAlt,
  FaBullhorn
} from 'react-icons/fa';

const content = {
  en: {
    name: 'Tsaqif Hasbi Aghna Syarief',
    title: 'Portfolio',
    subtitle: 'Creative Developer & Designer',
    description: 'Welcome to my modern portfolio! I am passionate about UI/UX design, web development, and logical programming.',
    aboutTitle: 'About Me',
    aboutDesc: 'I am a creative developer with a passion for creating beautiful and functional digital experiences. I specialize in UI/UX design, web development, and logical programming.',
    skillsTitle: 'My Skills',
    skills: [
      { 
        title: 'UI/UX Design', 
        desc: 'Creating intuitive and beautiful user interfaces using Figma, Adobe XD, and modern design principles.',
        tech: 'Figma, Adobe XD, Prototyping'
      },
      { 
        title: 'Web Development', 
        desc: 'Building responsive and interactive websites using modern web technologies and frameworks.',
        tech: 'HTML, CSS, JavaScript, React, Vue'
      },
      { 
        title: 'Programming Logic', 
        desc: 'Developing efficient algorithms and solutions using various programming languages.',
        tech: 'C, C++, Python, Java (OOP)'
      },
      { 
        title: 'Version Control', 
        desc: 'Managing code versions and collaboration using Git and GitHub for efficient project development.',
        tech: 'Git, GitHub, Collaboration'
      },
      { 
        title: 'Digital Marketing', 
        desc: 'Developing comprehensive digital marketing strategies including social media management, SEO optimization, and Google advertising campaigns.',
        tech: 'Social Media, SEO, Google Ads, Analytics'
      },
    ],
    projectsTitle: 'Featured Projects',
    contactTitle: 'Get In Touch',
    contactDesc: 'Feel free to reach out for collaborations or just a friendly hello!',
    language: 'Language',
    langCode: 'EN',
  },
  id: {
    name: 'Tsaqif Hasbi Aghna Syarief',
    title: 'Portofolio',
    subtitle: 'Creative Developer & Designer',
    description: 'Selamat datang di portofolio modern saya! Saya antusias dalam desain UI/UX, pengembangan web, dan pemrograman logika.',
    aboutTitle: 'Tentang Saya',
    aboutDesc: 'Saya adalah seorang developer kreatif dengan passion untuk menciptakan pengalaman digital yang indah dan fungsional. Saya mengkhususkan diri dalam desain UI/UX, pengembangan web, dan pemrograman logika.',
    skillsTitle: 'Keahlian Saya',
    skills: [
      { 
        title: 'Desain UI/UX', 
        desc: 'Menciptakan antarmuka pengguna yang intuitif dan indah menggunakan Figma, Adobe XD, dan prinsip desain modern.',
        tech: 'Figma, Prototyping'
      },
      { 
        title: 'Pengembangan Web', 
        desc: 'Membangun website responsif dan interaktif menggunakan teknologi web modern dan framework.',
        tech: 'HTML, CSS, JavaScript, React, Vue'
      },
      { 
        title: 'Pemrograman Logika', 
        desc: 'Mengembangkan algoritma dan solusi yang efisien menggunakan berbagai bahasa pemrograman.',
        tech: 'C, C++, Python, Java (OOP)'
      },
      { 
        title: 'Version Control', 
        desc: 'Mengelola versi kode dan kolaborasi menggunakan Git dan GitHub untuk pengembangan proyek yang efisien.',
        tech: 'Git, GitHub, Collaboration'
      },
      { 
        title: 'Digital Marketing', 
        desc: 'Mengembangkan strategi pemasaran digital yang komprehensif termasuk manajemen media sosial, optimisasi SEO, dan kampanye iklan Google.',
        tech: 'Social Media, SEO, Google Ads, Analytics'
      },
    ],
    projectsTitle: 'Proyek Unggulan',
    contactTitle: 'Mari Berkenalan',
    contactDesc: 'Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa!',
    language: 'Bahasa',
    langCode: 'ID',
  },
};

function App() {
  const [lang, setLang] = useState('id');
  const [darkMode, setDarkMode] = useState(true); // Default dark mode
  const t = content[lang];

  return (
    <div className={`App modern-portfolio ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Tsaqif Hasbi Aghna Syarief</div>
          <div className="nav-menu">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button className="lang-switcher" onClick={() => setLang(lang === 'id' ? 'en' : 'id')}>
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-name">{t.name}</h1>
            <h2 className="hero-title">{t.title}</h2>
            <p className="hero-subtitle">{t.subtitle}</p>
            <p className="hero-description">{t.description}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary">View My Work</button>
              <button className="btn btn-secondary">Contact Me</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-avatar">
              <img 
                src="/tsaqif.jpg" 
                alt="Tsaqif Hasbi Aghna Syarief" 
                className="avatar-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="avatar-placeholder" style={{display: 'none'}}><FaUser /></div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h3 className="section-title">{t.aboutTitle}</h3>
          <p className="about-description">{t.aboutDesc}</p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container">
          <h3 className="section-title">{t.skillsTitle}</h3>
          <div className="skills-grid">
            {/* First row - 3 cards */}
            <div className="skills-row">
              {t.skills.slice(0, 3).map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">
                    {idx === 0 ? <FaPalette /> : idx === 1 ? <FaCode /> : <FaBolt />}
                  </div>
                  <h4 className="skill-title">{skill.title}</h4>
                  <p className="skill-desc">{skill.desc}</p>
                  <div className="skill-tech">{skill.tech}</div>
                </div>
              ))}
            </div>
            {/* Second row - 2 cards centered */}
            <div className="skills-row">
              {t.skills.slice(3, 5).map((skill, idx) => (
                <div className="skill-card" key={idx + 3}>
                  <div className="skill-icon">
                    {idx === 0 ? <FaGitAlt /> : <FaBullhorn />}
                  </div>
                  <h4 className="skill-title">{skill.title}</h4>
                  <p className="skill-desc">{skill.desc}</p>
                  <div className="skill-tech">{skill.tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <div className="container">
          <h3 className="section-title">{t.projectsTitle}</h3>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image"><FaRocket /></div>
              <div className="project-content">
                <h4>Modern Web App</h4>
                <p>A responsive web application built with React and modern design principles.</p>
                <div className="project-tech">React • CSS • JavaScript</div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image"><FaMobile /></div>
              <div className="project-content">
                <h4>UI/UX Design</h4>
                <p>Complete design system and user experience for mobile application.</p>
                <div className="project-tech">Figma • Prototyping • User Research</div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image"><FaLightbulb /></div>
              <div className="project-content">
                <h4>Algorithm Solutions</h4>
                <p>Efficient algorithms and data structures implemented in multiple languages.</p>
                <div className="project-tech">Python • Java • C++</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <h3 className="section-title">{t.contactTitle}</h3>
          <p className="contact-description">{t.contactDesc}</p>
          <div className="contact-links">
            <a href="mailto:tsaqifhasbi17@gmail.com" className="contact-link">
              <FaEnvelope /> Email
            </a>
            <a href="https://www.linkedin.com/in/tsaqifhasbi" className="contact-link">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/TsaqifHasbi" className="contact-link">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 {t.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
