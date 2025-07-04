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
  FaInstagram,
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
        title: 'SARI Teknologi',
        position: 'Search Engine Optimization Team Lead',
        year: 'Feb 2022 - Jul 2022',
        location: 'Jakarta Barat, Jakarta Raya, Indonesia',
        description: 'An SEO Team Lead is someone who leads a team in developing and implementing search engine optimization strategies to improve online visibility and organic traffic.',
        achievements: [
          'Strategy Development: Designing effective SEO strategies',
          'Analysis and Reporting: Analyzing site performance and reporting results',
          'Keyword Research: Identifying relevant keywords',
          'On-Page and Off-Page Optimization: Optimizing site pages and building backlinks',
          'Team Management: Leading and training SEO team',
          'Cross-Team Collaboration: Working with marketing and web development teams',
          'Trend Monitoring: Following latest developments in SEO',
          'Project Management: Managing SEO projects from start to finish'
        ],
        technologies: ['SEO', 'Digital Marketing', 'Team Leadership', 'Analytics']
      },
      {
        title: 'BEM FT UNSOED',
        position: 'Staff Kementerian Minat dan Bakat',
        year: 'Mar 2024 - Des 2024',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'As Staff of Interest and Talent Ministry in Faculty of Engineering Student Executive Board UNSOED (BEM FT UNSOED), I contributed in planning and executing various interest and talent development programs for Faculty of Engineering students Universitas Jenderal Soedirman.',
        achievements: [
          'Identified student potential for competition preparation',
          'Organized annual programs such as POST and other activities',
          'Created proposals for sponsorship and funding',
          'Coordinated FT in PORSOED event',
          'Guided students to face competitions at university and inter-university levels',
          'Received Achievement Staff Of The Month in June 2024 for hard work and dedication'
        ],
        technologies: ['Event Management', 'Leadership', 'Project Management']
      },
      {
        title: 'BEM FT UNSOED',
        position: 'Faculty of Engineering Coordinator for the PORSOED Event',
        year: 'Sep 2024 - Nov 2024',
        location: 'Purwokerto, Jawa Tengah, Indonesia',
        description: 'As Faculty Coordinator in PORSOED (Pekan Olahraga Soedirman) representing BEM FT UNSOED, I was responsible for full coordination and contingent management of Faculty of Engineering Universitas Jenderal Soedirman in following inter-faculty sports competition.',
        achievements: [
          'Successfully coordinated 40+ athletes and officials from Faculty of Engineering in 16 sports branches',
          'Delivered Faculty of Engineering to rank 2nd after accumulating PORSOED 2024 points',
          'Developed effective strategies and motivated athletes to increase medal acquisition',
          'Completed all logistic and technical preparations professionally and on time',
          'Strengthened solidarity, team spirit, and pride of Faculty of Engineering students'
        ],
        technologies: ['Communication', 'Coordination Skills', 'Event Management']
      },
      {
        title: 'HMIF UNSOED',
        position: 'Head of Human Resource Development Division',
        year: 'Mar 2025 - Present',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'As Head of Human Resource Development Division in HMIF UNSOED (Himpunan Mahasiswa Informatika), I lead the division responsible for developing human resources, organizing training programs, and enhancing the skills and capabilities of Informatics students.',
        achievements: [
          'Successfully designed and implemented comprehensive training programs for Informatics students',
          'Organized technical workshops on programming, web development, and emerging technologies',
          'Developed mentorship programs pairing senior and junior students for knowledge transfer',
          'Coordinated professional development seminars with industry experts and alumni',
          'Established partnerships with tech companies for internship and job placement opportunities',
          'Led recruitment and orientation programs for new HMIF members',
          'Implemented skill assessment and certification tracking system for members'
        ],
        technologies: ['Leadership', 'Training Management', 'Human Resource Development', 'Program Coordination']
      },
      {
        title: 'Universitas Jenderal Soedirman',
        position: 'Data Structure Laboratory Assistant Informatics 2025',
        year: 'Mar 2025 - Present',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'As a Data Structure Laboratory Assistant, I assist faculty instructors in conducting practicum and guide students in understanding basic concepts and implementation of data structures using programming languages.',
        achievements: [
          'Successfully helped students understand fundamental data structure concepts and implementations',
          'Assisted students in solving practicum problems and provided programming guidance',
          'Objectively examined and evaluated student practicum results',
          'Provided solutions and additional explanations to strengthen student understanding',
          'Maintained order and continuity during practicum sessions'
        ],
        technologies: ['C (Programming Language)', 'Communication', 'Teaching']
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
        title: 'SARI Teknologi',
        position: 'Search Engine Optimization Team Lead',
        year: 'Feb 2022 - Jul 2022',
        location: 'Jakarta Barat, Jakarta Raya, Indonesia',
        description: 'Seorang SEO Team Lead adalah seseorang yang memimpin tim dalam mengembangkan dan melaksanakan strategi optimasi mesin pencari untuk meningkatkan visibilitas online dan lalu lintas organik.',
        achievements: [
          'Pengembangan Strategi: Merancang strategi SEO yang efektif',
          'Analisis dan Pelaporan: Menganalisis performa situs dan melaporkan hasilnya',
          'Penelitian Kata Kunci: Mengidentifikasi kata kunci yang relevan',
          'Optimasi On-Page dan Off-Page: Mengoptimalkan halaman situs dan membangun tautan balik',
          'Pengelolaan Tim: Memimpin dan melatih tim SEO',
          'Kolaborasi Antar Tim: Bekerja sama dengan tim pemasaran dan pengembang web',
          'Pemantauan Tren: Mengikuti perkembangan terbaru dalam SEO',
          'Manajemen Proyek: Mengelola proyek SEO dari awal hingga akhir'
        ],
        technologies: ['SEO', 'Pemasaran Digital', 'Kepemimpinan Tim', 'Analytics']
      },
      {
        title: 'BEM FT UNSOED',
        position: 'Staff Kementerian Minat dan Bakat',
        year: 'Mar 2024 - Des 2024',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'Sebagai Staff Minat dan Bakat di Badan Eksekutif Mahasiswa Fakultas Teknik UNSOED (BEM FT UNSOED), saya berkontribusi dalam merancang dan melaksanakan berbagai program pengembangan minat dan bakat mahasiswa Fakultas Teknik Universitas Jenderal Soedirman.',
        achievements: [
          'Mengidentifikasi potensi mahasiswa untuk persiapan lomba',
          'Menyusun program tahunan seperti POST dan kegiatan lainnya',
          'Membuat proposal untuk sponsorship dan pendanaan',
          'Koordinator FT dalam ajang PORSOED',
          'Membimbing mahasiswa menghadapi kompetisi di tingkat universitas dan antar-universitas',
          'Mendapat Achivment Staff Of The Month pada bulan Juni 2024 karena kerja keras dan dedikasinya pada bulan itu'
        ],
        technologies: ['Manajemen Acara', 'Kepemimpinan', 'Manajemen Proyek']
      },
      {
        title: 'BEM FT UNSOED',
        position: 'Koordinator Fakultas untuk Acara PORSOED',
        year: 'Sep 2024 - Nov 2024',
        location: 'Purwokerto, Jawa Tengah, Indonesia',
        description: 'Sebagai Koordinator Fakultas dalam PORSOED (Pekan Olahraga Soedirman) mewakili BEM FT UNSOED, saya bertanggung jawab penuh atas koordinasi dan manajemen kontingen Fakultas Teknik Universitas Jenderal Soedirman dalam mengikuti kompetisi olahraga antar fakultas.',
        achievements: [
          'Berhasil mengkoordinasikan 40+ atlet dan official dari Fakultas Teknik dalam 16 cabang olahraga',
          'Mengantarkan Fakultas Teknik meraih peringkat 2 setelah akumulasi poin PORSOED 2024',
          'Menyusun strategi efektif dan memotivasi atlet sehingga meningkatkan jumlah perolehan medali',
          'Menyelesaikan seluruh persiapan logistik dan teknis secara profesional dan tepat waktu',
          'Memperkuat solidaritas, semangat sportivitas, dan kebanggaan mahasiswa Fakultas Teknik'
        ],
        technologies: ['Komunikasi', 'Keterampilan Koordinasi', 'Manajemen Acara']
      },
      {
        title: 'HMIF UNSOED',
        position: 'Ketua Divisi Pengembangan Sumber Daya Manusia',
        year: 'Mar 2025 - Sekarang',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'Sebagai Ketua Divisi Pengembangan Sumber Daya Manusia di HMIF UNSOED (Himpunan Mahasiswa Informatika), saya memimpin divisi yang bertanggung jawab mengembangkan sumber daya manusia, menyelenggarakan program pelatihan, dan meningkatkan kemampuan mahasiswa Informatika.',
        achievements: [
          'Berhasil merancang dan mengimplementasikan program pelatihan komprehensif untuk mahasiswa Informatika',
          'Menyelenggarakan workshop teknis tentang pemrograman, pengembangan web, dan teknologi terkini',
          'Mengembangkan program mentoring yang memadukan mahasiswa senior dan junior untuk transfer knowledge',
          'Mengkoordinasikan seminar pengembangan profesional dengan pakar industri dan alumni',
          'Membangun kemitraan dengan perusahaan teknologi untuk peluang magang dan penempatan kerja',
          'Memimpin program rekrutmen dan orientasi anggota baru HMIF',
          'Mengimplementasikan sistem penilaian kemampuan dan tracking sertifikasi untuk anggota'
        ],
        technologies: ['Kepemimpinan', 'Manajemen Pelatihan', 'Pengembangan SDM', 'Koordinasi Program']
      },
      {
        title: 'Universitas Jenderal Soedirman',
        position: 'Asisten Laboratorium Struktur Data Informatika 2025',
        year: 'Mar 2025 - Sekarang',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'Sebagai Asisten Laboratorium Struktur Data, saya membantu dosen pengampu dalam pelaksanaan praktikum dan membimbing mahasiswa dalam memahami konsep dasar dan implementasi struktur data menggunakan bahasa pemrograman.',
        achievements: [
          'Berhasil membantu mahasiswa memahami konsep dasar struktur data dan implementasinya dengan baik',
          'Menyusun materi praktikum yang sistematis dan mudah dipahami, meningkatkan efektivitas pembelajaran',
          'Memberikan bimbingan intensif sehingga mahasiswa lebih percaya diri dalam menyelesaikan soal praktikum dan tugas akhir',
          'Mendapatkan umpan balik positif dari dosen pengampu dan mahasiswa atas peran aktif dalam mendukung pembelajaran praktikum'
        ],
        technologies: ['Bahasa Pemrograman C', 'Komunikasi', 'Pengajaran']
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
                src="/tsf.jpg" 
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
            <a href="https://www.linkedin.com/in/tsaqifhasbi" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/TsaqifHasbi" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.instagram.com/tsaqifhsb_" className="contact-link" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
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
