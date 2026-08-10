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

import Reveal from "./Reveal";

const skillGroups = [
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

function Skills() {
  return (
    <section id="skills" className="skills-section">
        <Reveal>
            <div className="section-container">

                <div className="section-heading">
                <span>02</span>
                <h2>Skills</h2>
                </div>

                <div className="skills-list">

                {skillGroups.map((group) => (
                    <div
                    className="skill-group"
                    key={group.category}
                    >

                    <div className="skill-category">
                        {group.category}
                    </div>

                    <div className="skill-items">

                        {group.skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div
                            className="skill-item"
                            key={skill.name}
                            >

                            {Icon && (
                                <Icon
                                className="skill-icon"
                                size={20}
                                />
                            )}

                            <span>
                                {skill.name}
                            </span>

                            </div>
                        );
                        })}

                    </div>

                    </div>
                ))}

                </div>

            </div>
        </Reveal>
    </section>
  );
}

export default Skills;