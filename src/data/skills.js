import {
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiMongodb,
} from "react-icons/si";

export const skillGroups = [
  {
    category: "Backend",
    skills: [
      {
        name: "Java",
        icon: FaJava,
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
      },
      {
        name: "REST APIs",
      },
      {
        name: "Microservices",
      },
    ],
  },

  {
    category: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "JPA / Hibernate",
      },
    ],
  },

  {
    category: "Tools & DevOps",
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
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Linux",
        icon: FaLinux,
      },
    ],
  },
];