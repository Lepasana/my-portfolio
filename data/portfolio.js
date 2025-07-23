// TypeScript interfaces removed for JavaScript compatibility

export const portfolioData = {
  personal: {
    name: "Rogem James Lepasana",
    title: "Frontend Developer",
    subtitle: "Building modern web applications with passion and precision",
    about: `I'm a fresh BSIT graduate with a strong passion for web development.
     I'm eager to gain real-world experience and grow my skills, 
     especially in both front-end and back-end technologies. 
     My goal is to become a full stack web developer, 
    and I'm looking for opportunities where I can learn, contribute, and develop professionally.`,
    avatar: "/avatar.jpg",
    resume: "/resume.pdf"
  },
  skills: [
    // Frontend
    { name: "React", level: 95, category: "frontend", icon: "react" },
    { name: "TypeScript", level: 90, category: "frontend", icon: "typescript" },
    { name: "Next.js", level: 88, category: "frontend", icon: "nextjs" },
    { name: "Tailwind CSS", level: 92, category: "frontend", icon: "tailwind" },
    { name: "JavaScript", level: 95, category: "frontend", icon: "javascript" },
    { name: "HTML/CSS", level: 98, category: "frontend", icon: "html" },
    
    // Backend
    { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
    { name: "Express.js", level: 85, category: "backend", icon: "express" },
    
    // Database
    { name: "MongoDB", level: 85, category: "database", icon: "mongodb" },
    { name: "MySQL", level: 80, category: "database", icon: "mysql" },
    
    // DevOps
    { name: "Git & GitHub", level: 90, category: "devops", icon: "github" },
    
    // Other
    { name: "MS Word", level: 90, category: "other", icon: "msword" },
    { name: "Excel", level: 85, category: "other", icon: "excel" },
    { name: "Video Editing", level: 80, category: "other", icon: "video" },
    { name: "Encoding", level: 80, category: "other", icon: "encoding" },
    { name: "Computer Troubleshooting", level: 85, category: "other", icon: "computer" },
    { name: "Ubuntu Linux", level: 80, category: "other", icon: "ubuntu" },
  ],
  projects: [
    {
      id: "1",
      title: "HR Management System",
      description: "A comprehensive web-based HR management system built with WAMP stack (Windows, Apache, MySQL, PHP) for efficient employee data management and HR processes.",
      image: "/projects/hr-system.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "Laravel", "MySQL", "Docker", "Apache", "WAMP Stack"],
      githubUrl: "https://github.com/Lepasana/hr2-Capstone",
      liveUrl: "https://hr2.bcp-smsservices.com/",
      featured: true,
      category: "web"
    }
  ],
  experience: {
    work: [
      {
        id: "1",
        position: "Data Encoder",
        company: "Life Saver Medical Services",
        duration: "2025 - Present",
        description: "Responsible for accurately inputting and maintaining medical data and patient records in the company's database system.",
        technologies: ["MS Excel", "MS Word", "Database Management", "Data Entry"],
        achievements: [
          "Maintained high accuracy in data entry and record keeping",
          "Ensured timely processing of medical records and patient information",
          "Collaborated with medical staff to verify and update patient data"
        ]
      }
    ],
    education: [
      {
        id: "1",
        institution: "Bestlink College of the Philippines",
        degree: "Bachelor of Science",
        field: "Information Technology (BSIT) - Network Administration",
        duration: "2021-2025",
        description: "Graduated as Bachelor of Science in Information Technology (BSIT) major in Network Administration."
      },
      {
        id: "2",
        institution: "Justice Cecilia Muñoz Palma Senior High School",
        degree: "Senior High School",
        field: "Information and Communication Technology (ICT) - Animation",
        duration: "2019-2021",
        description: "Graduated as Information and Communication Technology (ICT) major in Animation in my Senior Year."
      }
    ],
    certifications: [
      {
        id: "1",
        title: "Understanding the Innovators Role in Digital Transformation",
        organization: "Vista Venice Resort, Morong Bataan, Philippines",
        date: "April 24-26, 2023",
        link: "https://digitalleadership.com/",
        linkLabel: "Digital Innovation & Leadership",
        description: "Completed intensive training on digital transformation strategies, innovation leadership, and the role of technology in modern business development."
      }
    ]
  },
  contact: {
    email: "rogemlepasana@gmail.com",
    phone: "09562444109",
    location: "Quezon City, Philippines",
    linkedin: "https://www.linkedin.com/in/rogem-james-lepasana-48864a372",
    github: "https://github.com/yourusername",
    website: "https://your-portfolio.com"
  },
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/rogem-james-lepasana-48864a372",
    instagram: "https://www.instagram.com/rogemlepasana?igsh=dDk3YTU1aG93czFq",
    facebook: "https://www.facebook.com/rogem.lepasana.3?mibextid=ZbWKwL"
  }
}; 
