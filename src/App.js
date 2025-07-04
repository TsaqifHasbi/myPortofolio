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
  FaBullhorn,
  FaDatabase,
  FaSearch,
  FaMicrosoft,
  FaGraduationCap,
  // FaCalendarAlt
} from 'react-icons/fa';

const content = {
  en: {
    name: 'Tsaqif Hasbi Aghna Syarief',
    title: 'Portfolio',
    subtitle: 'Creative Developer & Designer',
    description: 'Welcome to my portfolio! I am passionate about UI/UX design, web development, and logical programming.',
    aboutTitle: 'About Me',
    aboutDesc: 'I am a creative developer with a passion for creating beautiful and functional digital experiences. I specialize in UI/UX design, web development, and logical programming.',
    educationTitle: 'Education',
    experienceTitle: 'Experience',
    experience: [
      {
        title: 'BEM FT Unsoed',
        position: 'Staff of Interest and Talent Ministry',
        year: '2024',
        location: 'Purwokerto, Indonesia',
        description: 'Leading cross-functional teams of Sr. developers and designers to deliver innovative solutions for student interests and talents development.',
        achievements: [
          'Increased student engagement by 40% through agile implementation',
          'Managed 10+ student talent across 8 different categories',
          'Developed student capabilities to drive achievement improvement',
          'Reduced cost optimization by 25% through improved communication processes',
          'Mentored 12 junior project managers'
        ],
        technologies: ['Event Management', 'Leadership', 'Project Management']
      },
      {
        title: 'HMIF Unsoed',
        position: 'Head of Student Development and Resource Division',
        year: '2025 - Present',
        location: 'Purwokerto, Indonesia',
        description: 'Managing informatics student development programs and human resources optimization.',
        achievements: [
          'Developed comprehensive student development strategies',
          'Improved student engagement in academic and non-academic activities',
          'Coordinated training programs for skill enhancement',
          'Established mentorship programs for junior students'
        ],
        technologies: ['Student Development', 'Human Resources', 'Training Programs']
      }
    ],
    education: [
      {
        institution: 'Universitas Jenderal Soedirman',
        degree: 'Bachelor of Informatics Engineering',
        year: '2023 - Present',
        description: 'Currently pursuing a degree in Informatics Engineering with focus on software development, algorithms, and computer systems.',
        gpa: 'GPA 3.7/4.0',
        achievements: [
          'Important Projects and Research',
          'Software Development Projects',
          'Organization and Leadership',
          'Volunteer Work',
          'Lab Assistant for Data Structure Course'
        ]
      },
      {
        institution: 'SMK Telkom Jakarta',
        degree: 'Vocational High School - Software Engineering',
        year: '2020 - 2023',
        description: 'Graduated from Vocational High School with specialization in Software Engineering, focusing on application development and programming.',
        gpa: 'Outstanding Graduate',
        achievements: [
          'Academic and Technical Excellence',
          'Software Development Project - Student Aspiration Web Application (localhost)',
          'Internship at Technology Company',
          'Industry Certification'
        ]
      }
    ],
    skillsTitle: 'My Skills',
    skills: [
      { 
        title: 'UI/UX Design', 
        desc: 'Creating intuitive and beautiful user interfaces using Figma, Adobe XD, and modern design principles.',
        tech: 'Figma, Prototyping'
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
        title: 'Database & SQL', 
        desc: 'Designing and managing databases with efficient query optimization and data modeling.',
        tech: 'MySQL, SQL'
      },
      { 
        title: 'Version Control', 
        desc: 'Managing code versions and collaboration using Git and GitHub for efficient project development.',
        tech: 'Git, GitHub, Collaboration'
      },
      { 
        title: 'Digital Marketing', 
        desc: 'Developing comprehensive digital marketing strategies including social media management, SEO optimization, and Google advertising campaigns.',
        tech: 'Social Media, Google Ads, Analytics'
      },
      { 
        title: 'SEO', 
        desc: 'Optimizing websites for search engines to improve visibility, ranking, and organic traffic through keyword research and technical optimization.',
        tech: 'Keyword Research, On-Page SEO, Analytics'
      },
      { 
        title: 'Microsoft Office', 
        desc: 'Proficient in Microsoft Office suite for productivity, data analysis, and professional documentation with advanced features and automation.',
        tech: 'Word, Excel, PowerPoint, Outlook'
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
    description: 'Selamat datang di portofolio saya! Saya antusias dalam desain UI/UX, pengembangan web, dan pemrograman logika.',
    aboutTitle: 'Tentang Saya',
    aboutDesc: 'Saya adalah seorang developer kreatif dengan passion untuk menciptakan pengalaman digital yang indah dan fungsional. Saya mengkhususkan diri dalam desain UI/UX, pengembangan web, dan pemrograman logika.',
    educationTitle: 'Pendidikan',
    experienceTitle: 'Pengalaman',
    experience: [
      {
        title: 'BEM FT Unsoed',
        position: 'Staff Kementerian Minat dan Bakat',
        year: '2024',
        location: 'Purwokerto, Indonesia',
        description: 'Memimpin tim lintas fungsi developer senior dan desainer untuk memberikan solusi inovatif dalam pengembangan minat dan bakat mahasiswa.',
        achievements: [
          'Meningkatkan keterlibatan mahasiswa sebesar 40% melalui implementasi agile',
          'Mengelola 10+ bakat mahasiswa di 8 kategori berbeda',
          'Mengembangkan kemampuan mahasiswa untuk mendorong peningkatan prestasi',
          'Mengurangi optimisasi biaya sebesar 25% melalui proses komunikasi yang lebih baik',
          'Membimbing 12 junior project manager'
        ],
        technologies: ['Manajemen Acara', 'Kepemimpinan', 'Manajemen Proyek']
      },
      {
        title: 'HMIF Unsoed',
        position: 'Kepala Divisi Pengembangan dan Sumber Daya Mahasiswa',
        year: '2025 - Sekarang',
        location: 'Purwokerto, Indonesia',
        description: 'Mengelola program pengembangan mahasiswa informatika dan optimisasi sumber daya manusia.',
        achievements: [
          'Mengembangkan strategi pengembangan mahasiswa yang komprehensif',
          'Meningkatkan keterlibatan mahasiswa dalam kegiatan akademik dan non-akademik',
          'Mengkoordinasikan program pelatihan untuk peningkatan keterampilan',
          'Mendirikan program mentorship untuk mahasiswa junior'
        ],
        technologies: ['Pengembangan SDM', 'Manajemen Sumber Daya', 'Program Pelatihan']
      }
    ],
    education: [
      {
        institution: 'Universitas Jenderal Soedirman',
        degree: 'Sarjana Teknik Informatika',
        year: '2023 - Sekarang',
        description: 'Sedang menempuh pendidikan Sarjana Teknik Informatika dengan fokus pada pengembangan perangkat lunak, algoritma, dan sistem komputer.',
        gpa: 'IPK 3.7/4.0',
        achievements: [
          'Proyek Penting dan Penelitian',
          'Proyek Pengembangan Software',
          'Organisasi dan Kepemimpinan',
          'Volunteer Work',
          'Asisten Praktikum Mata Kuliah Struktur Data'
        ]
      },
      {
        institution: 'SMK Telkom Jakarta',
        degree: 'SMK - Rekayasa Perangkat Lunak',
        year: '2020 - 2023',
        description: 'Lulus dari Sekolah Menengah Kejuruan dengan spesialisasi Rekayasa Perangkat Lunak, fokus pada pengembangan aplikasi dan pemrograman.',
        gpa: 'Lulusan Terbaik',
        achievements: [
          'Prestasi Akademik dan Teknis',
          'Proyek Pengembangan Software - Aplikasi Web Aspirasi Mahasiswa (localhost)',
          'Magang di Perusahaan Teknologi',
          'Sertifikasi Industri'
        ]
      }
    ],
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
        title: 'Database & SQL', 
        desc: 'Merancang dan mengelola database dengan optimisasi query yang efisien dan pemodelan data.',
        tech: 'MySQL, SQL'
      },
      { 
        title: 'Version Control', 
        desc: 'Mengelola versi kode dan kolaborasi menggunakan Git dan GitHub untuk pengembangan proyek yang efisien.',
        tech: 'Git, GitHub, Collaboration'
      },
      { 
        title: 'Digital Marketing', 
        desc: 'Mengembangkan strategi pemasaran digital yang komprehensif termasuk manajemen media sosial, optimisasi SEO, dan kampanye iklan Google.',
        tech: 'Social Media, Google Ads, Analytics'
      },
      { 
        title: 'SEO', 
        desc: 'Mengoptimalkan website untuk mesin pencari guna meningkatkan visibilitas, ranking, dan traffic organik melalui riset kata kunci dan optimisasi teknis.',
        tech: 'Keyword Research, On-Page SEO, Analytics'
      },
      { 
        title: 'Microsoft Office', 
        desc: 'Mahir menggunakan suite Microsoft Office untuk produktivitas, analisis data, dan dokumentasi profesional dengan fitur-fitur canggih dan otomasi.',
        tech: 'Word, Excel, PowerPoint, Outlook'
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
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
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

      {/* Education Section */}
      <section className="education-section" id="education">
        <div className="container">
          <h3 className="section-title">{t.educationTitle}</h3>
          <div className="education-grid">
            {t.education.map((edu, idx) => (
              <div className="education-card" key={idx}>
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-content">
                  <div className="education-header">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <div className="education-year">{edu.year}</div>
                  </div>
                  <h5 className="education-institution">{edu.institution}</h5>
                  <p className="education-description">{edu.description}</p>
                  <div className="education-gpa">{edu.gpa}</div>
                  <div className="education-achievements">
                    <h6>Key Achievements:</h6>
                    <ul>
                      {edu.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <div className="container">
          <h3 className="section-title">{t.experienceTitle}</h3>
          <div className="experience-timeline">
            {t.experience.map((exp, idx) => (
              <div className="experience-item" key={idx}>
                <div className="experience-line">
                  <div className="experience-dot"></div>
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h4 className="experience-title">{exp.title}</h4>
                    <div className="experience-year">{exp.year}</div>
                  </div>
                  <h5 className="experience-position">{exp.position}</h5>
                  <div className="experience-location">{exp.location}</div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-achievements">
                    <h6>Key Achievements:</h6>
                    <ul>
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-technologies">
                    <h6>Skills & Competencies:</h6>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <div className="container">
          <h3 className="section-title">{t.skillsTitle}</h3>
          <div className="skills-grid">
            <div className="skills-row">
              {t.skills.map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">
                    {idx === 0 ? <FaPalette /> : 
                     idx === 1 ? <FaCode /> : 
                     idx === 2 ? <FaBolt /> : 
                     idx === 3 ? <FaDatabase /> : 
                     idx === 4 ? <FaGitAlt /> : 
                     idx === 5 ? <FaBullhorn /> :
                     idx === 6 ? <FaSearch /> :
                     <FaMicrosoft />}
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
