// All content on this site is sourced from Sarangi R's resume.
// Keep this file as the single source of truth for copy.

export const profile = {
  name: 'Sarangi R',
  title: 'Software Developer | MERN Stack & AI',
  location: 'Kerala, India',
  email: 'sarangisr7@gmail.com',
  linkedin: {
    label: 'linkedin.com/in/sarangi07',
    url: 'https://www.linkedin.com/in/sarangi07',
  },
  resumeUrl: '/Sarangi_R_Resume.pdf',
  resumeFileName: 'Sarangi_R_Resume.pdf',
  photo: { src: '/sarangi-r.jpg', alt: 'Sarangi R', width: 720, height: 900 },
  intro:
    'MCA graduate building responsive, database-driven web applications with the MERN stack. I develop REST APIs with Node.js and Express.js, work with MongoDB and PostgreSQL, deploy to AWS EC2 and Vercel, and have applied AI concepts such as Retrieval-Augmented Generation in real applications.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  heading: 'Building practical applications with modern technologies.',
  paragraphs: [
    'I am an MCA graduate from Kristu Jayanti Deemed to be University with hands-on experience in full-stack web development. I build web applications using React.js, Node.js, Express.js and MongoDB, with additional programming experience in Python and Java.',
    'My work covers the full application lifecycle: designing REST APIs, implementing JWT authentication and role-based access control, integrating databases, and deploying production builds on AWS EC2, Vercel and Nginx. I have built platforms for workforce management, job applications, interview scheduling and complaint handling, each with its own workflows, user roles and data model.',
    'Alongside development, I have practical exposure to AI-driven applications, including a RAG chatbot built with Python, as well as data processing and Power BI dashboard development from my AI internship.',
  ],
  cards: [
    { label: 'MCA Graduate', detail: 'Kristu Jayanti Deemed to be University' },
    { label: 'Full Stack Development', detail: 'React.js, Node.js, Express.js, MongoDB' },
    { label: 'Cloud Deployment', detail: 'AWS EC2, Vercel, Nginx' },
    { label: 'AI Applications', detail: 'RAG chatbot, Generative AI, Power BI' },
  ],
}

export const skillGroups = [
  { name: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI'] },
  { name: 'Backend', items: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Role-Based Access Control'] },
  { name: 'Database', items: ['MongoDB', 'PostgreSQL', 'SQL', 'Database Design'] },
  { name: 'Cloud & Deployment', items: ['AWS EC2', 'Vercel', 'Nginx', 'Production Hosting'] },
  { name: 'Programming', items: ['JavaScript', 'Python', 'Java', 'Object-Oriented Programming', 'Debugging', 'Testing'] },
  { name: 'AI & Data', items: ['Generative AI', 'RAG', 'Power BI', 'Data Visualisation', 'Data Processing'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'Microsoft Office Suite'] },
]

// Compact strip shown under the hero.
export const techStrip = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'Python', 'AWS EC2', 'Git']

export const experience = [
  {
    role: 'Website Developer Intern',
    company: 'BeePeaks Pvt. Ltd.',
    location: 'Kerala, India',
    period: 'Mar 2026 – May 2026',
    summary: 'Website development and maintenance across development and production environments.',
    bullets: [
      'Developed and maintained web applications and company website functionality using modern web development technologies.',
      'Built responsive user interfaces with a focus on usability, accessibility and consistent presentation across devices.',
      'Implemented front-end improvements to enhance website usability and user experience.',
      'Supported website development and maintenance activities across development and production environments.',
      'Collaborated with the development team to understand requirements and deliver functional, production-ready web solutions.',
      'Assisted with troubleshooting and refinement of website functionality, supporting stable and reliable web experiences.',
    ],
    tags: ['Website Development', 'Responsive UI', 'Usability', 'Maintenance', 'Troubleshooting', 'Team Collaboration'],
  },
  {
    role: 'AI Intern',
    company: 'IPSR Solution Ltd.',
    location: 'Kerala, India',
    period: 'Jun 2025 – Jul 2025',
    summary: 'Power BI dashboards, Python data processing and a Retrieval-Augmented Generation chatbot.',
    bullets: [
      'Developed interactive Power BI dashboards to transform data into visual reports and actionable insights.',
      'Built a Retrieval-Augmented Generation (RAG) chatbot using Python, gaining practical exposure to AI-powered application development.',
      'Applied data processing and visualisation techniques to prepare information for analytical and AI use cases.',
      'Worked with artificial intelligence concepts including data preparation, information retrieval and AI-driven application workflows.',
      'Supported analytical solution development by combining Python, data processing, visualisation and AI concepts.',
      'Explored practical applications of AI and data analytics within software and business-oriented use cases.',
    ],
    tags: ['Power BI', 'Python', 'RAG Chatbot', 'Data Processing', 'Data Visualisation', 'AI Concepts'],
  },
]

export const projects = [
  {
    id: 'interview-scheduler',
    name: 'Interview Scheduler',
    type: 'MERN Stack Web Application',
    tagline:
      'An interview scheduling and management platform covering candidates, interviewers and coordinators, with status tracking and responsive dashboards.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    layers: ['React.js', 'Express API', 'MongoDB'],
    highlights: [
      'Scheduling, rescheduling & cancellation',
      'Interview status tracking',
      'Candidate, interviewer & coordinator management',
      'Responsive dashboard',
    ],
    details: {
      overview:
        'An interview scheduling and management platform built with the MERN stack. It manages candidates, interviewers and coordinators, and supports scheduling, rescheduling and cancelling interviews while tracking the status of each interview.',
      features: [
        'Interview scheduling, rescheduling and cancellation',
        'Interview status tracking',
        'Candidate management',
        'Interviewer management',
        'Coordinator management',
        'Responsive dashboards for interview information and scheduling activity',
      ],
      stack: {
        Frontend: 'React.js with responsive dashboards',
        Backend: 'Node.js and Express.js services',
        Database: 'MongoDB for scheduling-related data',
      },
      workflow: [
        'A coordinator creates an interview by linking a candidate and an interviewer to a scheduled slot.',
        'The interview can be rescheduled or cancelled, and its status is updated at each step.',
        'Dashboards display current interview information and scheduling activity for the people involved.',
      ],
      considerations: [
        'Scheduling workflows: rescheduling and cancellation had to update interview status correctly without leaving stale records.',
        'Status changes: each transition needed to be reflected consistently in the database and on every dashboard.',
        'Form handling: scheduling forms required validation for dates, participants and conflicting inputs.',
      ],
      contribution: [
        'Developed the interview scheduling and management platform using the MERN stack.',
        'Implemented scheduling workflows covering candidate, interviewer and coordinator management.',
        'Built scheduling, rescheduling and cancellation functionality with interview status tracking.',
        'Developed responsive dashboards for managing interview information and scheduling activities.',
        'Applied MongoDB database integration for storing and managing scheduling-related information.',
      ],
    },
  },
  {
    id: 'job-portal',
    name: 'Full Stack Job Portal',
    type: 'MERN Stack Web Application',
    flagship: true,
    tagline:
      'A job portal covering job posting, applications and experience verification, with JWT authentication, role-based dashboards and real-time chat.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'AWS EC2', 'Nginx', 'Vercel'],
    layers: ['React.js', 'Express API', 'MongoDB', 'AWS EC2 · Nginx'],
    highlights: [
      'Job posting & applications',
      'Experience verification',
      'JWT authentication',
      'Role-based dashboards',
      'Real-time chat',
    ],
    details: {
      overview:
        'A full-stack job portal built with React.js, Node.js, Express.js and MongoDB. Employers post jobs and review applications, while workers apply and communicate directly with employers. The application covers job posting, application and experience verification workflows end to end.',
      features: [
        'Job posting and application workflows',
        'Experience verification workflow',
        'JWT-based authentication',
        'Separate role-based dashboards for employers and workers',
        'Real-time chat between application users',
        'Responsive interfaces across screen sizes',
      ],
      stack: {
        Frontend: 'React.js with responsive application interfaces',
        Backend: 'Node.js and Express.js REST APIs',
        Database: 'MongoDB',
        Authentication: 'JWT-based authentication with role-based dashboards',
        Deployment: 'Frontend on Vercel; backend on AWS EC2 behind Nginx',
      },
      workflow: [
        'A user registers and signs in; a JWT is issued and attached to subsequent API requests.',
        'The user role determines which dashboard and actions are available: employers post and manage jobs, workers browse and apply.',
        'Applications and experience verification move through the backend via REST endpoints and are stored in MongoDB.',
        'Employers and workers communicate through real-time chat once an application is in progress.',
      ],
      considerations: [
        'Authentication flow: token issuance, expiry and protected routes had to behave consistently for both roles.',
        'Role permissions: employer-only and worker-only actions needed to be enforced on the API, not just hidden in the UI.',
        'API communication: form submissions, validation errors and status updates had to surface clearly to the user.',
        'Deployment: the Vercel frontend and the Nginx-proxied EC2 backend had to be configured to communicate reliably in production.',
      ],
      contribution: [
        'Developed the full-stack job portal using React.js, Node.js, Express.js and MongoDB, covering job posting, applications and experience verification workflows.',
        'Designed and implemented REST APIs to support communication between front-end components and backend services.',
        'Implemented JWT-based authentication and role-based dashboards for employers and workers.',
        'Developed real-time chat functionality to enable direct communication between application users.',
        'Deployed the front end on Vercel and backend on AWS EC2 with Nginx, creating a production-ready deployment architecture.',
      ],
    },
  },
  {
    id: 'workercred',
    name: 'WorkerCred',
    type: 'Full Stack Web Application',
    flagship: true,
    tagline:
      'A workforce management platform with a React.js frontend, Express REST APIs and MongoDB, deployed on AWS EC2 and Vercel.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS EC2', 'Vercel'],
    layers: ['React.js', 'Express API', 'MongoDB', 'AWS EC2 · Vercel'],
    highlights: ['Full-stack architecture', 'REST APIs', 'Database integration', 'Backend on AWS EC2', 'Frontend on Vercel'],
    details: {
      overview:
        'WorkerCred is a full-stack workforce management platform built on the MERN stack. It connects responsive React.js interfaces to backend services through RESTful APIs, with MongoDB handling application data storage and management.',
      features: [
        'Responsive React.js interfaces for application functionality and user interaction',
        'RESTful APIs built with Node.js and Express.js',
        'MongoDB integration for data storage and management',
        'End-to-end workflows connecting frontend, backend and database operations',
      ],
      stack: {
        Frontend: 'React.js, deployed on Vercel',
        Backend: 'Node.js and Express.js REST APIs, deployed on AWS EC2',
        Database: 'MongoDB',
        Deployment: 'Backend on AWS EC2; frontend on Vercel',
      },
      workflow: [
        'User actions in the React.js interface trigger requests to Express.js REST endpoints.',
        'The backend validates the request, performs the required database operation in MongoDB and returns a response.',
        'The frontend updates to reflect the new application state.',
      ],
      considerations: [
        'API communication between the Vercel-hosted frontend and the EC2-hosted backend had to be configured correctly for production.',
        'Database operations: create, read, update and delete flows needed to stay consistent between the interface and the stored data.',
        'Responsive UI: application screens had to remain usable at both desktop and mobile widths.',
      ],
      contribution: [
        'Developed the full-stack workforce management platform using the MERN stack.',
        'Built responsive React.js interfaces for application functionality and user interaction.',
        'Developed RESTful APIs using Node.js and Express.js for backend application services.',
        'Integrated MongoDB for database storage and application data management.',
        'Deployed the backend on AWS EC2 and frontend on Vercel.',
      ],
    },
  },
  {
    id: 'hostel-complaints',
    name: 'Hostel Complaint Management System',
    type: 'MERN Stack Academic Project',
    tagline:
      'A complaint management system for lodging, tracking and resolving hostel-related issues, with role-based authentication and status tracking.',
    tech: ['MERN Stack', 'Role-Based Authentication'],
    layers: ['React.js', 'Express API', 'MongoDB'],
    highlights: ['Complaint submission & tracking', 'Resolution workflow', 'Role-based authentication', 'Status tracking'],
    details: {
      overview:
        'A MERN stack academic project for lodging, tracking and resolving hostel-related issues. Role-based authentication controls who can submit, manage and update complaints, and each complaint is tracked through its resolution process.',
      features: [
        'Complaint submission',
        'Complaint status tracking throughout resolution',
        'Workflows for submitting, managing and updating complaints',
        'Role-based authentication controlling access to functionality',
      ],
      stack: {
        Frontend: 'React.js',
        Backend: 'Node.js and Express.js',
        Database: 'MongoDB',
        Authentication: 'Role-based authentication',
      },
      workflow: [
        'A resident signs in and submits a complaint describing the issue.',
        'The complaint is stored with an initial status and becomes visible to the role responsible for handling it.',
        'As the issue is worked on, its status is updated until it is marked resolved.',
      ],
      considerations: [
        'Role permissions: residents and staff needed different levels of access to viewing and updating complaints.',
        'Status tracking: complaint state had to progress in a predictable order and remain accurate for every user.',
        'Application workflow: the submit, manage and update paths had to work together without gaps or duplicate records.',
      ],
      contribution: [
        'Developed the complaint management system for lodging, tracking and resolving hostel-related issues.',
        'Implemented role-based authentication to control access to application functionality.',
        'Built complaint status tracking to monitor issues throughout the resolution process.',
        'Designed application workflows for submitting, managing and updating complaints.',
      ],
    },
  },
  {
    id: 'business-website',
    name: 'Static Business Website',
    type: 'Client Project',
    tagline:
      'A responsive business website developed and deployed for a client, with production hosting and ongoing maintenance.',
    tech: ['Responsive Web Development', 'Production Hosting', 'Maintenance'],
    layers: ['Responsive Site', 'Production Hosting'],
    highlights: ['Responsive website', 'Deployment', 'Production hosting', 'Ongoing maintenance'],
    details: {
      overview:
        'A responsive business website developed for a client, with an emphasis on usability and presentation. Beyond the build, the work included managing production hosting, deploying the site and supporting ongoing maintenance and availability.',
      features: [
        'Responsive web interfaces with emphasis on usability and presentation',
        'Production hosting and deployment',
        'Ongoing maintenance and production availability',
      ],
      stack: {
        Frontend: 'Responsive website interfaces',
        Deployment: 'Production hosting managed for the client',
      },
      workflow: [
        'Requirements were gathered from the client and translated into a responsive site structure.',
        'The site was deployed to production hosting.',
        'Updates and maintenance were applied over time to keep the site available and current.',
      ],
      considerations: [
        'Responsive UI: layout and presentation had to hold up across desktop and mobile devices.',
        'Website maintenance: changes were applied without disrupting the live site.',
      ],
      contribution: [
        'Developed and deployed a responsive business website for a client.',
        'Implemented responsive web interfaces with emphasis on usability and presentation.',
        'Managed production hosting and website deployment.',
        'Supported ongoing website maintenance and production availability.',
      ],
    },
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Kristu Jayanti Deemed to be University',
    location: 'Bengaluru, India',
    period: '2024 – 2026',
    score: 'CGPA: 8.14',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Mahe Co-operative College',
    location: 'Kerala, India',
    period: '2021 – 2024',
    score: 'CGPA: 7.58',
  },
]

export const certifications = [
  { name: 'AI for Skilling: Data Science Training Program', issuer: 'NASSCOM Foundation and Capgemini' },
  { name: 'Introduction to Artificial Intelligence', issuer: 'Infosys Springboard' },
  { name: 'AWS Cloud Developing Badge', issuer: 'Amazon Web Services' },
  { name: 'Programming Using Java', issuer: 'Infosys Springboard' },
]
