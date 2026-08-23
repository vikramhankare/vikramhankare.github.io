import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import Reveal from "./Reveal";

import { technologyIcons } from "../data/technologyIcons";
import { experiences } from "../data/experience";
import { profile } from "../data/profile";

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
            <h1>Experience</h1>
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
              href={profile.linkedin}
              className="resume-link"
            >
              View my LinkedIn profile
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}

export default Experience;