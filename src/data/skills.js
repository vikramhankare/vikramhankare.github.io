import {
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiSpringboot,
  SiSpringsecurity,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiFirebase,
  SiGithubactions,
  SiVercel,
  SiIntellijidea,
  SiPostman,
} from "react-icons/si";

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "SQL",
      },
    ],
  },

  {
    category: "Frontend",
    skills: [
      {
        name: "React.js",
        icon: SiReact,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS3",
      },
      {
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
    ],
  },

  {
    category: "Backend",
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "Spring MVC",
      },
      {
        name: "Spring Security",
        icon: SiSpringsecurity,
      },
      {
        name: "Hibernate",
      },
      {
        name: "JPA",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
    ],
  },

  {
    category: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Redis",
        icon: SiRedis,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
    ],
  },

  {
    category: "Cloud & DevOps",
    skills: [
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "AWS EC2",
        icon: FaAws,
      },
      {
        name: "AWS S3",
        icon: FaAws,
      },
      {
        name: "GitHub Actions",
        icon: SiGithubactions,
      },
      {
        name: "Render",
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },

  {
    category: "Developer Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
      },
      {
        name: "VS Code",
      },
      {
        name: "Maven",
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
    ],
  },

  {
    category: "Concepts",
    skills: [
      {
        name: "REST APIs",
      },
      {
        name: "Microservices",
      },
      {
        name: "OOP",
      },
      {
        name: "Multithreading",
      },
      {
        name: "JWT Authentication",
      },
      {
        name: "Design Patterns",
      },
    ],
  },
];