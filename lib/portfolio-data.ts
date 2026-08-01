export type NavItem = {
  label: string;
  href: `#${string}`;
  id: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent: string;
  demoHref: string;
  codeHref: string;
  metric: string;
  image: string;
};

export type TimelineItem = {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
};

export const profile = {
  name: "Yassine Azouanat",
  initials: "YA",
  role: "Technicien Superieur en Informatique",
  headline: "Full-stack developer building secure, polished digital products.",
  location: "Kenitra, Morocco",
  birthday: "19/04/2005",
  email: "yassineazouanat8610@gmail.com",
  phoneDisplay: "+212 610 861 014",
  phoneRaw: "212610861014",
  whatsappMessage:
    "Hello%20Yassine,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20contact%20you.",
  summary:
    "Computer engineering student with a DUT and current Bachelor studies, focused on full-stack development, API design, data analysis, testing, and maintainable software systems.",
  cvHref: "/cv.pdf"
};

export const whatsappHref = `https://wa.me/${profile.phoneRaw}?text=${profile.whatsappMessage}`;

export const socials = [
  {
    label: "LinkedIn",
    href: "linkedin.com/in/yassine-azouanat-9373a3351",
    icon: "linkedin"
  },
  {
    label: "GitHub",
    href: "https://github.com/Yassine366-ux",
    icon: "github"
  },
  {
    label: "WhatsApp",
    href: whatsappHref,
    icon: "whatsapp"
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "mail"
  }
] as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" }
];

export const heroRoles = [
  "Full Stack Developer",
  "Next.js & React Builder",
  "Secure API Developer",
  "Software Testing Enthusiast"
];

export const stats = [
  { value: "2+", label: "Professional internships" },
  { value: "7+", label: "Featured projects" },
  { value: "10+", label: "Technologies" },
  { value: "3", label: "Languages" }
];

export const skills: Skill[] = [
  { name: "JEE", level: 92, category: "Backend" },
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "React.js", level: 88, category: "Frontend" },
  { name: "Python", level: 88, category: "Programming" },
  { name: "SQL", level: 90, category: "Database" },
  { name: "Express.js", level: 86, category: "Backend" },
  { name: "C / C++", level: 87, category: "Algorithms" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "REST API", level: 78, category: "Backend" },
  { name: "Laravel / PHP", level: 74, category: "Backend" }
];

export const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Modern interfaces and robust server logic with React, Next.js, Laravel, Express.js, and SQL-backed architectures.",
    icon: "code"
  },
  {
    title: "Secure API Engineering",
    description:
      "REST APIs with authentication, CRUD workflows, JWT security, clean data models, and maintainable endpoints.",
    icon: "shield"
  },
  {
    title: "Testing & Quality",
    description:
      "Functional testing, anomaly reports, Selenium and JUnit workflows, and validation-minded development.",
    icon: "check"
  },
  {
    title: "Software Design",
    description:
      "Structured UML modeling with use case, class, and sequence diagrams before implementation.",
    icon: "diagram"
  }
];

export const projects: Project[] = [
  {
    title: "Secure Task Management API",
    description:
      "REST API built with Spring Boot for task CRUD workflows, protected with JWT authentication and clean resource access.",
    tags: ["Spring Boot", "JWT", "REST API", "JEE"],
    accent: "from-cyanGlow to-electricBlue",
    demoHref: "#contact",
    codeHref: socials[1].href,
    metric: "Secure CRUD",
    image: "/images/projects/task-api.webp"
  },
  {
    title: "Interactive Weather Map",
    description:
      "Weather application with interactive mapping, dynamic forecast data, Open-Meteo integration, and Express.js services.",
    tags: ["JavaScript", "Leaflet", "Open-Meteo", "Express.js"],
    accent: "from-sky-400 to-emerald-300",
    demoHref: "#contact",
    codeHref: socials[1].href,
    metric: "Live API",
    image: "/images/projects/weather-map.png"
  },
  {
    title: "E-commerce Electronics Platform",
    description:
      "Online store for electronic products with UI participation, functional testing, PHP logic, and MySQL persistence.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    accent: "from-blue-400 to-fuchsia-300",
    demoHref: "#contact",
    codeHref: socials[1].href,
    metric: "Storefront",
    image: "/images/projects/ecommerce-platform.webp"
  },
  {
    title: "Matrix Systems Solver",
    description:
      "C program that solves linear equation systems using algorithmic methods including Cramer and Gauss.",
    tags: ["C", "Algorithms", "Numerical Methods"],
    accent: "from-cyan-300 to-indigo-400",
    demoHref: "#contact",
    codeHref: socials[1].href,
    metric: "C Solver",
    image: "/images/projects/matrix-solver.png"
  },
  {
    title: "Software Validation Project",
    description:
      "Real application testing workflow with test execution, anomaly reporting, Selenium automation, and JUnit validation.",
    tags: ["Selenium", "JUnit", "QA", "Testing"],
    accent: "from-emerald-300 to-cyanGlow",
    demoHref: "#contact",
    codeHref: socials[1].href,
    metric: "QA Flow",
    image: "/images/projects/software-validation.webp"
  },
  {
    title: "Network Sniffing Workshop",
    description:
      "Cybersecurity exercise analyzing suspicious packets and explaining risks on unsecured networks with Wireshark and TCPDump.",
    tags: ["Wireshark", "TCPDump", "Cybersecurity"],
    accent: "from-cyanGlow to-violet-400",
    demoHref: "#contact",
    codeHref: socials[1].href,
    metric: "Traffic Analysis",
    image: "/images/projects/network-sniffing.png"
  },
{
    title: "ParkingUp - Smart Parking Reservation System",
    description:
      "A full-stack web application that enables users to search for available parking spaces, reserve parking spots online, manage bookings, and allows administrators to monitor parking availability and reservations through a secure dashboard.",
    tags: [
      "React.js",
      "Laravel",
      "MySQL",
      "REST API",
      "Tailwind CSS"
    ],
    accent: "from-emerald-400 to-blue-500",
    demoHref: "#contact", // ou ton lien de démo
    codeHref: socials[1].href, // ou le lien GitHub du projet
    metric: "Reservation",
    image: "/images/projects/parkingup.png"
  }
,
  {
  title: "YourGuideTravel - Full Stack Travel Marketplace",
  description:
    "A full-stack travel marketplace platform that allows users to discover destinations, book activities, purchase travel products, and manage bookings. Built with Next.js and Laravel using secure authentication, role-based access control, AI trip planning, and an admin dashboard.",
  tags: [
    "Next.js",
    "React",
    "Laravel",
    "TypeScript",
    "Tailwind CSS",
    "MySQL",
    "REST API",
    "Sanctum"
  ],
  accent: "from-cyanGlow to-blue-500",
  demoHref: "#contact",
  codeHref: socials[1].href,
  metric: "Full Stack",
  image: "/images/projects/yourguidetravel.png"
}
];

export const experience: TimelineItem[] = [
   {
    period: "Apr 2026 - Jun 2026",
    title: "Full Stack Developer Intern",
    organization: "GHM LABS - Kenitra",
    description:
      "Designed and developed YourGuideTravel, a full-stack travel marketplace platform using Next.js, Laravel, TypeScript, and MySQL. Implemented secure authentication, role-based access control, booking and order management, AI Trip Planner, provider dashboards, product marketplace, reviews, notifications, and REST API integration while collaborating within an Agile development environment.",
    tags: [
      "Next.js",
      "Laravel",
      "TypeScript",
      "MySQL",
      "REST API",
      "Tailwind CSS",
      "AI",
      "Agile"
    ]
  },
  {
    period: "Apr 2025 - Jun 2025",
    title: "Full Stack Development Technical Intern",
    organization: "I-Soft Network",
    description:
      "Developed a weather application with interactive cartography, integrated weather APIs, and delivered dynamic data views using JavaScript, Leaflet, Open-Meteo, and Express.js.",
    tags: ["JavaScript", "Leaflet", "Open-Meteo", "Express.js"]
  },
  {
    period: "Jul 2024 - Aug 2024",
    title: "E-commerce Platform Development Intern",
    organization: "VPI INFO",
    description:
      "Contributed to an online electronics store, participated in interface design, and supported functional testing across HTML, CSS, JavaScript, PHP, and MySQL.",
    tags: ["PHP", "MySQL", "JavaScript", "Testing"]
  }
];

export const education: TimelineItem[] = [
  {
    period: "Since Sep 2025",
    title: "Bachelor in Computer Engineering Technology and Digital Governance",
    organization: "Ecole Superieure de Technologie, Kenitra",
    description:
      "Advanced Bachelor studies focused on computer engineering, software systems, digital governance, and professional project delivery.",
    tags: ["Bachelor", "Digital Governance", "Computer Engineering"]
  },
  {
    period: "Sep 2023 - Jun 2025",
    title: "DUT in Computer Engineering",
    organization: "Ecole Superieure de Technologie, Kenitra",
    description:
      "University technology diploma in computer engineering with a strong base in development, databases, algorithms, and software testing.",
    tags: ["DUT", "Software", "Databases"]
  },
  {
    period: "Sep 2022 - 2023",
    title: "Baccalaureate in Physical Sciences",
    organization: "Lycee Mohammed ECHRAYBI, Kenitra",
    description: "Graduated with mention Bien after a science-focused academic track.",
    tags: ["Physical Sciences", "Mention Bien"]
  }
];

export const testimonials = [
  {
    quote:
      "Yassine brings a disciplined engineering mindset, strong curiosity, and a clear ability to turn technical requirements into working software.",
    author: "Academic Project Supervisor",
    role: "Computer Engineering"
  },
  {
    quote:
      "He communicates clearly, works well with a team, and pays close attention to testing and the details that make applications reliable.",
    author: "Internship Mentor",
    role: "Development Team"
  },
  {
    quote:
      "A rigorous profile with a real appetite for full-stack development, software design, and secure digital solutions.",
    author: "Project Collaborator",
    role: "Software Project"
  }
];

export const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "mail"
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phoneRaw}`,
    icon: "phone"
  },
  {
    label: "LinkedIn",
    value: "Professional profile",
    href: socials[0].href,
    icon: "linkedin"
  },
  {
    label: "GitHub",
    value: "Code repositories",
    href: socials[1].href,
    icon: "github"
  },
  {
    label: "WhatsApp",
    value: "Fast direct contact",
    href: whatsappHref,
    icon: "whatsapp"
  }
] as const;
