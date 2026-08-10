import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";

import { technologyIcons } from "../data/technologyIcons";

const experiences = [
  {
    period: "2025 — Present",
    role: "Backend Engineer",
    company: "Company Name",
    location: "India · Remote",
    description:
      "Building scalable backend services and production-ready applications using Java, Spring Boot, REST APIs, and relational databases.",
    responsibilities: [
      "Developed and maintained RESTful APIs using Java and Spring Boot.",
      "Worked with databases, JPA/Hibernate, and service-layer architecture.",
      "Designed backend components with scalability, reliability, and maintainability in mind.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JPA",
      "PostgreSQL",
    ],
  },

  {
    period: "2024 — 2025",
    role: "Software Engineer",
    company: "Previous Company",
    location: "India · Hybrid",
    description:
      "Worked on backend application development and contributed to building reliable software components.",
    responsibilities: [
      "Implemented backend features and business logic.",
      "Worked with APIs, databases, testing, and debugging.",
      "Collaborated with team members to deliver production-ready features.",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Git",
      "JUnit",
    ],
  },

  {
    period: "2023 — 2024",
    role: "Software Engineering Intern",
    company: "Company / Organization",
    location: "India",
    description:
      "Gained practical software engineering experience while working on application development and problem solving.",
    responsibilities: [
      "Worked on application features and internal tools.",
      "Practiced clean coding and software development fundamentals.",
      "Collaborated with developers while learning production workflows.",
    ],
    technologies: [
      "Java",
      "Spring",
      "SQL",
      "Git",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="experience-section"
    >
      <Reveal>
        <div className="section-container">

          {/* Section heading */}
          <div className="section-heading">
            <span>03</span>
            <h2>Experience</h2>
          </div>

          {/* Experience list */}
          <div className="experience-list">

            {experiences.map((experience, index) => (
              <motion.article
                className="experience-item"
                key={`${experience.company}-${experience.role}`}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                {/* Date */}
                <div className="experience-period">
                  <CalendarDays size={15} />
                  <span>{experience.period}</span>
                </div>

                {/* Main content */}
                <div className="experience-content">

                  <div className="experience-header">

                    <div>
                      <h3>{experience.role}</h3>

                      <div className="experience-company">
                        {experience.company}
                      </div>

                      <div className="experience-location">
                        {experience.location}
                      </div>
                    </div>

                  </div>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <ul className="experience-responsibilities">
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <li key={responsibility}>
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>

                  <div className="experience-technologies">
                        {experience.technologies.map((technology) => {
                            const Icon = technologyIcons[technology];

                            return (
                            <span key={technology}>
                                {Icon && <Icon size={16} />}
                                {technology}
                            </span>
                            );
                        })}
                   </div>

                </div>

              </motion.article>
            ))}

          </div>

          {/* Resume placeholder */}
          <motion.div
            className="experience-resume"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <a
              href="#contact"
              className="resume-link"
            >
              View full resume
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}

export default Experience;