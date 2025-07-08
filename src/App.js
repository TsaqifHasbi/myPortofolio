import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { 
  FaPalette, 
  FaCode, 
  FaRocket, 
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
  FaBrain,
  FaCertificate,
  FaServer,
  FaReact
} from 'react-icons/fa';

const content = {
  en: {
    name: 'Tsaqif Hasbi Aghna Syarief',
    title: 'Portfolio',
    subtitle: 'Informatics Student & Tech Enthusiast',
    description: 'Passionate Informatics student at Jenderal Soedirman University with expertise in software development, data structures, and digital marketing. Currently serving as Head of Human Resource Development Division at HMIF UNSOED.',
    aboutTitle: 'About Me',
    aboutDesc: 'I am an ambitious Informatics student with a strong foundation in programming, algorithm design, and digital marketing. My leadership experience includes managing human resource development programs and coordinating major university events. I combine technical skills with strategic thinking to create innovative solutions.',
    whoAmI: "I'm a passionate frontend developer specializing in responsive and interactive user interfaces. With a background in Informatics from Jenderal Soedirman University, I combine technical expertise with creative design thinking. I have extensive experience with modern frameworks like React and Vue.js, and I'm proficient in HTML, CSS, and JavaScript.",
    myApproach: 'My development philosophy centers on user-centered design principles where every decision prioritizes the end user experience. I follow a systematic approach with thorough planning and iterative development cycles. I emphasize clean, maintainable code while staying updated with industry best practices. Performance optimization and accessibility are crucial aspects of my workflow.',
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
        description: 'As Staff of Interest and Talent Ministry in Faculty of Engineering Student Executive Board UNSOED (BEM FT UNSOED), I contributed in planning and executing various interest and talent development programs for Faculty of Engineering students Jenderal Soedirman University.',
        achievements: [
          'Identified student potential for competition preparation',
          'Organized annual programs such as POST and other activities',
          'Created proposals for sponsorship and funding',
          'Coordinated FT in PORSOED event',
          'Guided students to face competitions at university and inter-university levels',
          'Received Staff of the Month award in June 2024 for outstanding hard work and dedication'
        ],
        technologies: ['Event Management', 'Leadership', 'Project Management']
      },
      {
        title: 'BEM FT UNSOED',
        position: 'Faculty of Engineering Coordinator for the PORSOED Event',
        year: 'Sep 2024 - Nov 2024',
        location: 'Purwokerto, Jawa Tengah, Indonesia',
        description: 'As Faculty Coordinator in PORSOED (Pekan Olahraga Soedirman) representing BEM FT UNSOED, I was responsible for full coordination and contingent management of Faculty of Engineering Jenderal Soedirman University in following inter-faculty sports competition.',
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
          'Developed mentorship programs pairing senior and junior students for knowledge transfer',
          'Designed and developed cadre events for Informatics department to build character and leadership skills',
          'Coordinated professional development seminars with industry experts and alumni',
          'Led recruitment and orientation programs for new HMIF members',
          'Implemented skill assessment and certification tracking system for members'
        ],
        technologies: ['Leadership', 'Training Management', 'Human Resource Development', 'Program Coordination']
      },
      {
        title: 'Jenderal Soedirman University',
        position: 'Data Structure Laboratory Assistant Informatics 2025',
        year: 'Mar 2025 - Jun 2025',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'As a Data Structure Laboratory Assistant, I assisted faculty instructors in conducting practicum and guided students in understanding basic concepts and implementation of data structures using programming languages.',
        achievements: [
          'Successfully helped students understand fundamental data structure concepts and implementations',
          'Assisted students in solving practicum problems and provided programming guidance',
          'Objectively evaluated student practicum results and provided accurate assessments',
          'Provided solutions and additional explanations to strengthen student understanding',
          'Maintained order and continuity during practicum sessions',
          'Completed 3-month intensive teaching period with positive student feedback'
        ],
        technologies: ['C Programming Language', 'Communication', 'Teaching']
      }
    ],
    education: [
      {
        institution: 'Jenderal Soedirman University',
        degree: 'Bachelor of Computer Science - Informatics (B.Sc)',
        year: '2023 - Present',
        description: 'Currently pursuing a degree in Informatics with focus on software development, algorithms, and computer systems.',
        gpa: 'GPA 3.7/4.0',
        achievements: [
          'Important Projects and Research',
          'Software Development Projects',
          'Organization and Leadership',
          'Volunteer Work',
          'Lab Assistant Experience'
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
        desc: 'Creating intuitive and beautiful user interfaces using Figma, Canva, and modern design principles.',
        techs: [
          { name: 'Figma', level: 90 },
          { name: 'Prototyping', level: 88 },
          { name: 'Canva', level: 85 },
          { name: 'Adobe Illustrator', level: 82 }
        ]
      },
      { 
        title: 'Web Development', 
        desc: 'Building responsive and interactive websites using fundamental web technologies and core programming languages.',
        techs: [
          { name: 'HTML', level: 95 },
          { name: 'CSS', level: 90 },
          { name: 'JavaScript', level: 88 },
          { name: 'DOM Manipulation', level: 85 },
          { name: 'Web APIs', level: 80 }
        ]
      },
      { 
        title: 'JavaScript Frameworks', 
        desc: 'Building dynamic and interactive web applications using modern JavaScript frameworks and libraries for component-based development.',
        techs: [
          { name: 'ReactJS', level: 85 },
          { name: 'VueJS', level: 50 },
          { name: 'Component Architecture', level: 82 },
          { name: 'State Management', level: 78 }
        ]
      },
      { 
        title: 'Frontend Frameworks', 
        desc: 'Building modern and responsive user interfaces using popular CSS frameworks and utility-first libraries for rapid development.',
        techs: [
          { name: 'Bootstrap', level: 88 },
          { name: 'Tailwind CSS', level: 85 },
          { name: 'Bulma', level: 15 },
          { name: 'Material-UI', level: 10 }
        ]
      },
      { 
        title: 'Backend Frameworks', 
        desc: 'Developing robust web applications using modern backend frameworks for efficient server-side development.',
        techs: [
          { name: 'CodeIgniter', level: 82 },
          { name: 'Laravel', level: 80 },
          { name: 'AdonisJS', level: 75 }
        ]
      },
      { 
        title: 'Programming Logic', 
        desc: 'Developing efficient algorithms and solutions using various programming languages.',
        techs: [
          { name: 'C', level: 95 },
          { name: 'C++', level: 88 },
          { name: 'Python', level: 85 },
          { name: 'Java (OOP)', level: 82 }
        ]
      },
      { 
        title: 'Database & SQL', 
        desc: 'Designing and managing databases with efficient query optimization and data modeling.',
        techs: [
          { name: 'MySQL', level: 88 },
          { name: 'SQL Queries', level: 85 },
          { name: 'Database Design', level: 80 },
          { name: 'Data Modeling', level: 78 }
        ]
      },
      { 
        title: 'Version Control', 
        desc: 'Managing code versions and collaboration using Git and GitHub for efficient project development.',
        techs: [
          { name: 'Git', level: 92 },
          { name: 'GitHub', level: 88 },
          { name: 'Collaboration', level: 85 },
          { name: 'Branch Management', level: 82 }
        ]
      },
      { 
        title: 'Digital Marketing', 
        desc: 'Developing comprehensive digital marketing strategies including social media management, SEO optimization, and Google advertising campaigns.',
        techs: [
          { name: 'Social Media', level: 90 },
          { name: 'Google Ads', level: 88 },
          { name: 'Analytics', level: 85 },
          { name: 'Content Strategy', level: 83 }
        ]
      },
      { 
        title: 'SEO', 
        desc: 'Optimizing websites for search engines to improve visibility, ranking, and organic traffic through keyword research and technical optimization.',
        techs: [
          { name: 'Keyword Research', level: 95 },
          { name: 'On-Page SEO', level: 92 },
          { name: 'Technical SEO', level: 88 },
          { name: 'Analytics', level: 85 }
        ]
      },
      { 
        title: 'Microsoft Office', 
        desc: 'Proficient in Microsoft Office suite for productivity, data analysis, and professional documentation with advanced features and automation.',
        techs: [
          { name: 'Excel', level: 92 },
          { name: 'Word', level: 88 },
          { name: 'PowerPoint', level: 85 },
          { name: 'Outlook', level: 82 }
        ]
      },
    ],
    projectsTitle: 'Featured Projects',
    projects: [
      {
        title: 'Modern Web Portfolio',
        description: 'A responsive portfolio website built with React and modern design principles featuring bilingual support and dark mode.',
        tech: 'React • CSS • JavaScript'
      },
      {
        title: 'Data Structure Algorithms',
        description: 'Collection of efficient algorithms and data structures implemented in C programming language for educational purposes.',
        tech: 'C • Algorithms • Data Structures'
      },
      {
        title: 'Digital Marketing Analytics',
        description: 'Comprehensive SEO analysis and digital marketing strategy implementation for improving online visibility.',
        tech: 'SEO • Analytics • Digital Marketing'
      }
    ],
    certificationsTitle: 'Certifications',
    certifications: [
      {
        title: 'Digital Marketing',
        issuer: 'Indonesian Professional Certification Authority (BNSP)',
        year: '2022',
        status: 'Active',
        credentialId: 'No. 62090 2431 0 0034390 2022',
        description: 'Professional certification in digital marketing strategies, social media management, and online advertising campaigns.',
        skills: ['Digital Marketing', 'Social Media Management', 'Online Advertising', 'Marketing Analytics']
      },
      {
        title: 'Software Engineering',
        issuer: 'Indonesian Professional Certification Authority (BNSP)',
        year: '2023',
        status: 'Active',
        credentialId: 'No. 62010 3514 2 0001413 2023',
        description: 'Professional certification in software engineering with qualification in software development and engineering practices.',
        skills: ['Software Development', 'Programming', 'System Design', 'Software Engineering']
      },
      {
        title: 'Data Structure Laboratory Assistant',
        issuer: 'Jenderal Soedirman University - Faculty of Engineering/Informatics',
        year: '2025',
        status: 'Completed',
        credentialId: 'Academic Year 2024/2025',
        description: 'Official certification as Data Structure Laboratory Assistant for Academic Year 2024/2025, successfully completed teaching assistance duties in Data Structure practicum courses under supervision of Bangun Wijayanto from March to June 2025.',
        skills: ['Data Structures', 'C Programming', 'Teaching', 'Laboratory Management']
      }
    ],
    contactTitle: 'Get In Touch',
    contactDesc: 'Feel free to reach out for collaborations or just a friendly hello!',
    language: 'Language',
    langCode: 'EN',
  },

  // Indonesian content
  id: {
    name: 'Tsaqif Hasbi Aghna Syarief',
    title: 'Portofolio',
    subtitle: 'Mahasiswa Informatika & Tech Enthusiast',
    description: 'Mahasiswa Informatika Universitas Jenderal Soedirman yang passionate dalam pengembangan perangkat lunak, struktur data, dan digital marketing. Saat ini menjabat sebagai Ketua Divisi Pengembangan Sumber Daya Mahasiswa di HMIF UNSOED.',
    aboutTitle: 'Tentang Saya',
    aboutDesc: 'Saya adalah mahasiswa Informatika yang ambisius dengan fondasi kuat dalam pemrograman, desain algoritma, dan digital marketing. Pengalaman kepemimpinan saya meliputi pengelolaan program pengembangan SDM dan koordinasi acara besar universitas. Saya menggabungkan kemampuan teknis dengan pemikiran strategis untuk menciptakan solusi inovatif.',
    whoAmI: 'Saya adalah frontend developer yang bersemangat dan mengkhususkan diri dalam antarmuka pengguna yang responsif dan interaktif. Dengan latar belakang Informatika dari Universitas Jenderal Soedirman, saya memadukan keahlian teknis dengan pemikiran desain kreatif. Saya memiliki pengalaman luas dengan framework modern seperti React dan Vue.js, serta mahir dalam HTML, CSS, dan JavaScript.',
    myApproach: 'Filosofi pengembangan saya berpusat pada prinsip desain yang mengutamakan pengguna di mana setiap keputusan memprioritaskan pengalaman pengguna akhir. Saya mengikuti pendekatan sistematis dengan perencanaan menyeluruh dan siklus pengembangan iteratif. Saya menekankan kode yang bersih dan mudah dipelihara sambil terus mengikuti praktik terbaik industri. Optimisasi performa dan aksesibilitas adalah aspek penting dalam alur kerja saya.',
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
        technologies: ['SEO', 'Digital Marketing', 'Team Leadership', 'Analytics']
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
          'Mendapat penghargaan Staff Terbaik Bulan Juni 2024 karena kerja keras dan dedikasi yang luar biasa'
        ],
        technologies: ['Event Management', 'Leadership', 'Project Management']
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
        technologies: ['Communication', 'Coordination Skills', 'Event Management']
      },
      {
        title: 'HMIF UNSOED',
        position: 'Ketua Divisi Pengembangan Sumber Daya Manusia',
        year: 'Mar 2025 - Sekarang',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'Sebagai Ketua Divisi Pengembangan Sumber Daya Manusia di HMIF UNSOED (Himpunan Mahasiswa Informatika), saya memimpin divisi yang bertanggung jawab mengembangkan sumber daya manusia, menyelenggarakan program pelatihan, dan meningkatkan kemampuan mahasiswa Informatika.',
        achievements: [
          'Berhasil merancang dan mengimplementasikan program pelatihan komprehensif untuk mahasiswa Informatika',
          'Mengembangkan program mentoring yang memadukan mahasiswa senior dan junior untuk transfer knowledge',
          'Merancang dan mengembangkan acara kaderisasi jurusan Informatika untuk membangun karakter dan jiwa kepemimpinan',
          'Mengkoordinasikan seminar pengembangan profesional dengan pakar industri dan alumni',
          'Memimpin program rekrutmen dan orientasi anggota baru HMIF',
          'Mengimplementasikan sistem penilaian kemampuan dan tracking sertifikasi untuk anggota'
        ],
        technologies: ['Leadership', 'Training Management', 'Human Resource Development', 'Program Coordination']
      },
      {
        title: 'Universitas Jenderal Soedirman',
        position: 'Asisten Laboratorium Struktur Data Informatika 2025',
        year: 'Mar 2025 - Jun 2025',
        location: 'Purbalingga, Jawa Tengah, Indonesia',
        description: 'Sebagai Asisten Laboratorium Struktur Data, saya membantu dosen pengampu dalam pelaksanaan praktikum dan membimbing mahasiswa dalam memahami konsep dasar dan implementasi struktur data menggunakan bahasa pemrograman.',
        achievements: [
          'Berhasil membantu mahasiswa memahami konsep dasar struktur data dan implementasinya dengan baik',
          'Membantu mahasiswa dalam memecahkan masalah praktikum dan memberikan bimbingan pemrograman',
          'Mengevaluasi hasil praktikum mahasiswa secara objektif dan memberikan penilaian yang akurat',
          'Memberikan solusi dan penjelasan tambahan untuk memperkuat pemahaman mahasiswa',
          'Menjaga ketertiban dan kelancaran saat berlangsungnya sesi praktikum',
          'Menyelesaikan periode pengajaran intensif 3 bulan dengan feedback positif dari mahasiswa'
        ],
        technologies: ['C Programming Language', 'Communication', 'Teaching']
      }
    ],
    education: [
      {
        institution: 'Universitas Jenderal Soedirman',
        degree: 'Sarjana Komputer - Informatika (S.Kom)',
        year: '2023 - Sekarang',
        description: 'Sedang menempuh pendidikan Sarjana Komputer jurusan Informatika dengan fokus pada pengembangan perangkat lunak, algoritma, dan sistem komputer.',
        gpa: 'IPK 3.7/4.0',
        achievements: [
          'Proyek Penting dan Penelitian',
          'Proyek Pengembangan Perangkat Lunak',
          'Organisasi dan Kepemimpinan',
          'Kerja Volunteer',
          'Pengalaman Asisten Praktikum'
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
          'Proyek Pengembangan Perangkat Lunak - Aplikasi Web Aspirasi Mahasiswa (localhost)',
          'Magang di Perusahaan Teknologi',
          'Sertifikasi Industri'
        ]
      }
    ],
    skillsTitle: 'Keahlian Saya',
    skills: [
      { 
        title: 'Desain UI/UX', 
        desc: 'Menciptakan antarmuka pengguna yang intuitif dan indah menggunakan Figma, Canva, dan prinsip desain modern.',
        techs: [
          { name: 'Figma', level: 90 },
          { name: 'Prototyping', level: 88 },
          { name: 'Canva', level: 85 },
          { name: 'Adobe Illustrator', level: 82 }
        ]
      },
      { 
        title: 'Pengembangan Web', 
        desc: 'Membangun website responsif dan interaktif menggunakan teknologi web fundamental dan bahasa pemrograman inti.',
        techs: [
          { name: 'HTML', level: 95 },
          { name: 'CSS', level: 90 },
          { name: 'JavaScript', level: 88 },
          { name: 'DOM Manipulation', level: 85 },
          { name: 'Web APIs', level: 80 }
        ]
      },
      { 
        title: 'JavaScript Frameworks', 
        desc: 'Membangun aplikasi web yang dinamis dan interaktif menggunakan framework JavaScript modern dan library untuk pengembangan berbasis komponen.',
        techs: [
          { name: 'ReactJS', level: 85 },
          { name: 'VueJS', level: 50 },
          { name: 'Component Architecture', level: 82 },
          { name: 'State Management', level: 78 }
        ]
      },
      { 
        title: 'Framework Frontend', 
        desc: 'Membangun antarmuka pengguna yang modern dan responsif menggunakan framework CSS populer dan utility-first libraries untuk pengembangan yang cepat.',
        techs: [
          { name: 'Bootstrap', level: 88 },
          { name: 'Tailwind CSS', level: 85 },
          { name: 'Bulma', level: 15 },
          { name: 'Material-UI', level: 10 }
        ]
      },
      { 
        title: 'Framework Backend', 
        desc: 'Mengembangkan aplikasi web yang robust menggunakan framework backend modern untuk pengembangan sisi server yang efisien.',
        techs: [
          { name: 'CodeIgniter', level: 82 },
          { name: 'Laravel', level: 80 },
          { name: 'AdonisJS', level: 75 }
        ]
      },
      { 
        title: 'Pemrograman Logika', 
        desc: 'Mengembangkan algoritma dan solusi yang efisien menggunakan berbagai bahasa pemrograman.',
        techs: [
          { name: 'C', level: 95 },
          { name: 'C++', level: 88 },
          { name: 'Python', level: 85 },
          { name: 'Java (OOP)', level: 82 }
        ]
      },
      { 
        title: 'Database & SQL', 
        desc: 'Merancang dan mengelola database dengan optimisasi query yang efisien dan pemodelan data.',
        techs: [
          { name: 'MySQL', level: 88 },
          { name: 'SQL Queries', level: 85 },
          { name: 'Database Design', level: 80 },
          { name: 'Data Modeling', level: 78 }
        ]
      },
      { 
        title: 'Version Control', 
        desc: 'Mengelola versi kode dan kolaborasi menggunakan Git dan GitHub untuk pengembangan proyek yang efisien.',
        techs: [
          { name: 'Git', level: 92 },
          { name: 'GitHub', level: 88 },
          { name: 'Collaboration', level: 85 },
          { name: 'Branch Management', level: 82 }
        ]
      },
      { 
        title: 'Digital Marketing', 
        desc: 'Mengembangkan strategi pemasaran digital yang komprehensif termasuk manajemen media sosial, optimisasi SEO, dan kampanye iklan Google.',
        techs: [
          { name: 'Social Media', level: 90 },
          { name: 'Google Ads', level: 88 },
          { name: 'Analytics', level: 85 },
          { name: 'Content Strategy', level: 83 }
        ]
      },
      { 
        title: 'SEO', 
        desc: 'Mengoptimalkan website untuk mesin pencari guna meningkatkan visibilitas, ranking, dan traffic organik melalui riset kata kunci dan optimisasi teknis.',
        techs: [
          { name: 'Keyword Research', level: 95 },
          { name: 'On-Page SEO', level: 92 },
          { name: 'Technical SEO', level: 88 },
          { name: 'Analytics', level: 85 }
        ]
      },
      { 
        title: 'Microsoft Office', 
        desc: 'Mahir menggunakan suite Microsoft Office untuk produktivitas, analisis data, dan dokumentasi profesional dengan fitur-fitur canggih dan otomasi.',
        techs: [
          { name: 'Excel', level: 92 },
          { name: 'Word', level: 88 },
          { name: 'PowerPoint', level: 85 },
          { name: 'Outlook', level: 82 }
        ]
      },
    ],
    projectsTitle: 'Proyek Unggulan',
    projects: [
      {
        title: 'Portofolio Web Modern',
        description: 'Website portofolio responsif yang dibangun dengan React dan prinsip desain modern dengan fitur bilingual dan mode gelap.',
        tech: 'React • CSS • JavaScript'
      },
      {
        title: 'Algoritma Struktur Data',
        description: 'Koleksi algoritma dan struktur data yang efisien diimplementasikan dalam bahasa pemrograman C untuk tujuan edukasi.',
        tech: 'C • Algorithms • Data Structures'
      },
      {
        title: 'Analitik Digital Marketing',
        description: 'Analisis SEO komprehensif dan implementasi strategi digital marketing untuk meningkatkan visibilitas online.',
        tech: 'SEO • Analytics • Digital Marketing'
      }
    ],
    certificationsTitle: 'Sertifikasi',
    certifications: [
      {
        title: 'Digital Marketing',
        issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        year: '2022',
        status: 'Aktif',
        credentialId: 'No. 62090 2431 0 0034390 2022',
        description: 'Sertifikasi profesional dalam strategi pemasaran digital, manajemen media sosial, dan kampanye iklan online.',
        skills: ['Pemasaran Digital', 'Manajemen Media Sosial', 'Periklanan Online', 'Analitik Pemasaran']
      },
      {
        title: 'Software Engineering',
        issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
        year: '2023',
        status: 'Aktif',
        credentialId: 'No. 62010 3514 2 0001413 2023',
        description: 'Sertifikasi profesional dalam software engineering dengan kualifikasi dalam pengembangan perangkat lunak dan praktik rekayasa.',
        skills: ['Pengembangan Perangkat Lunak', 'Pemrograman', 'Desain Sistem', 'Rekayasa Perangkat Lunak']
      },
      {
        title: 'Asisten Laboratorium Struktur Data',
        issuer: 'Universitas Jenderal Soedirman - Fakultas Teknik/Informatika',
        year: '2025',
        status: 'Selesai',
        credentialId: 'Tahun Akademik 2024/2025',
        description: 'Sertifikat resmi sebagai Asisten Laboratorium Struktur Data untuk Tahun Akademik 2024/2025, berhasil menyelesaikan tugas bantuan pengajaran dalam praktikum mata kuliah Struktur Data di bawah pengawasan Bangun Wijayanto dari Maret hingga Juni 2025.',
        skills: ['Struktur Data', 'Pemrograman C', 'Pengajaran', 'Manajemen Laboratorium']
      }
    ],
    contactTitle: 'Mari Berkenalan',
    contactDesc: 'Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa!',
    language: 'Bahasa',
    langCode: 'ID',
  },
};

function App() {
  const [lang, setLang] = useState('id');
  const [darkMode, setDarkMode] = useState(true); // Default dark mode
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);
  const t = content[lang];

  // Intersection Observer for skills animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      {
        threshold: 0.1, // Lowered threshold for easier triggering
      }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Fallback: Set skillsVisible to true after 2 seconds
    const fallbackTimer = setTimeout(() => {
      setSkillsVisible(true);
    }, 2000);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //const yOffset = -80; // Offset to account for fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset; //+ yOffset
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`App modern-portfolio ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Tsaqif Hasbi Aghna Syarief</div>
          <div className="nav-menu">
            <button onClick={() => scrollToSection('about')} className="nav-link">{lang === 'id' ? 'Tentang' : 'About'}</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">{lang === 'id' ? 'Pendidikan' : 'Education'}</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">{lang === 'id' ? 'Pengalaman' : 'Experience'}</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">{lang === 'id' ? 'Keahlian' : 'Skills'}</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">{lang === 'id' ? 'Proyek' : 'Projects'}</button>
            <button onClick={() => scrollToSection('certifications')} className="nav-link">{lang === 'id' ? 'Sertifikasi' : 'Certifications'}</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">{lang === 'id' ? 'Kontak' : 'Contact'}</button>
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
          <div className="hero-content-centered">
            <div className="hero-decorative-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
            <h1 className="hero-name">{t.name}</h1>
            <h2 className="hero-title">{t.title}</h2>
            <p className="hero-subtitle">{t.subtitle}</p>
            <p className="hero-description">{t.description}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('experience')}>{lang === 'id' ? 'Lihat Pengalaman Saya' : 'View My Experience'}</button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('certifications')}>{lang === 'id' ? 'Lihat Sertifikasi' : 'View Certifications'}</button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <h3 className="section-title">{t.aboutTitle}</h3>
          <div className="about-content">
            <div className="about-left">
              <div className="about-visual">
                <div className="about-circles">
                  <div className="circle circle-1"></div>
                  <div className="circle circle-2"></div>
                  <div className="circle circle-3"></div>
                  <div className="circle circle-4"></div>
                </div>
                <div className="about-main-circle">
                  <div className="about-avatar">
                    <img 
                      src="/tsf.jpg" 
                      alt="Tsaqif Hasbi Aghna Syarief" 
                      className="about-avatar-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="about-avatar-placeholder" style={{display: 'none'}}>
                      <FaUser />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="about-text-content">
                <div className="about-paragraph">
                  <p className="paragraph-text">{t.whoAmI}</p>
                </div>
                
                <div className="about-paragraph">
                  <p className="paragraph-text">{t.myApproach}</p>
                </div>
              </div>
            </div>
          </div>
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
                    <h6>{lang === 'id' ? 'Pencapaian Utama:' : 'Key Achievements:'}</h6>
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
                    <h6>{lang === 'id' ? 'Pencapaian Utama:' : 'Key Achievements:'}</h6>
                    <ul>
                      {exp.achievements.map((achievement, achIdx) => (
                        <li key={achIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-technologies">
                    <h6>{lang === 'id' ? 'Keterampilan & Kompetensi:' : 'Skills & Competencies:'}</h6>
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
      <section className="skills-section" id="skills" ref={skillsRef}>
        <div className="container">
          <h3 className="section-title">{t.skillsTitle}</h3>
          <div className="skills-grid">
            <div className="skills-row">
              {t.skills.map((skill, idx) => (
                <div className="skill-card" key={idx}>
                  <div className="skill-icon">
                    {idx === 0 ? <FaPalette /> : 
                     idx === 1 ? <FaCode /> : 
                     idx === 2 ? <FaReact /> : 
                     idx === 3 ? <FaRocket /> : 
                     idx === 4 ? <FaServer /> : 
                     idx === 5 ? <FaBrain /> : 
                     idx === 6 ? <FaDatabase /> : 
                     idx === 7 ? <FaGitAlt /> : 
                     idx === 8 ? <FaBullhorn /> :
                     idx === 9 ? <FaSearch /> :
                     <FaMicrosoft />}
                  </div>
                  <h4 className="skill-title">{skill.title}</h4>
                  <p className="skill-desc">{skill.desc}</p>
                  <div className="skill-techs">
                    {skill.techs.map((tech, techIdx) => (
                      <div key={techIdx} className="tech-item">
                        <div className="tech-info">
                          <span className="tech-name">{tech.name}</span>
                          <span className="tech-level">{tech.level}%</span>
                        </div>
                        <div className="tech-progress-bar" style={{
                          width: '100%',
                          height: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          marginTop: '4px'
                        }}>
                          <div 
                            className={`tech-progress-fill ${skillsVisible ? 'animate' : ''}`}
                            style={{ 
                              width: skillsVisible ? `${tech.level}%` : '0%',
                              height: '100%',
                              backgroundColor: '#007bff',
                              borderRadius: '4px',
                              transition: 'width 1s ease-in-out',
                              transitionDelay: `${(idx * 4 + techIdx) * 0.1}s`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
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
            {t.projects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <div className="project-image">
                  {idx === 0 ? <FaRocket /> : 
                   idx === 1 ? <FaLightbulb /> : 
                   <FaBullhorn />}
                </div>
                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="project-tech">{project.tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section" id="certifications">
        <div className="container">
          <h3 className="section-title">{t.certificationsTitle}</h3>
          <div className="certifications-grid">
            {t.certifications.map((cert, idx) => (
              <div className="certification-card" key={idx}>
                <div className="certification-header">
                  <div className="certification-icon">
                    <FaCertificate />
                  </div>
                  <div className="certification-status">{cert.status}</div>
                </div>
                <div className="certification-content">
                  <h4 className="certification-title">{cert.title}</h4>
                  <h5 className="certification-issuer">{cert.issuer}</h5>
                  <div className="certification-year">{lang === 'id' ? 'Terbit:' : 'Issued:'} {cert.year}</div>
                  <p className="certification-description">{cert.description}</p>
                  <div className="certification-credential">
                    {lang === 'id' ? 'ID Kredensial:' : 'Credential ID:'} {cert.credentialId}
                  </div>
                  <div className="certification-skills">
                    <h6>{lang === 'id' ? 'Keterampilan Utama:' : 'Key Skills:'}</h6>
                    <div className="cert-skills-tags">
                      {cert.skills.map((skill, skillIdx) => (
                        <span key={skillIdx} className="cert-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              <FaEnvelope /> {lang === 'id' ? 'Email' : 'Email'}
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
          <p>&copy; 2025 {t.name}. {lang === 'id' ? 'Seluruh hak cipta dilindungi.' : 'All rights reserved.'}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
