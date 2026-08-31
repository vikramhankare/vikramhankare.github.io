import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import Reveal from "./Reveal";

import { projects } from "../data/projects";
import { profile } from "../data/profile";
import { technologyIcons } from "../data/technologyIcons";


// Converts **text** into bold + red highlighted text
function renderHighlightedText(text) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={index}
          style={{
            color: "#ff1744",
            fontWeight: 700,
          }}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }

    return part;
  });
}


function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <Reveal>
        <div className="section-container">

          {/* Section heading */}
          <div className="section-heading">
            <span>05</span>
            <h1>Projects</h1>
          </div>

          <p className="projects-intro">
            A selection of backend systems and
            applications I've built while exploring
            scalable software architecture.
          </p>


          {/* Projects */}
          <div className="projects-list">

            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: index * 0.08,
                }}
              >

                {/* Project number */}
                <div className="project-number">
                  {project.number}
                </div>


                {/* Project content */}
                <div className="project-content">

                  <div className="project-header">

                    <h3>
                      {project.title}
                    </h3>

                    <div className="project-links">

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <FaGithub size={18} />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live project`}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}

                    </div>

                  </div>


                  {/* Project description */}
                  <ul className="project-description">
                    {project.description.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        {renderHighlightedText(point)}
                      </li>
                    ))}
                  </ul>


                  {/* Highlight / keyword pills */}
                  <div className="project-technologies">
                    {project.technologies.map((technology) => {
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


                {/* Arrow */}
                <ArrowUpRight
                  className="project-arrow"
                  size={22}
                />

              </motion.article>
            ))}

          </div>


          {/* GitHub CTA */}
          <motion.div
            className="projects-cta"
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
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="projects-github-link"
            >
              View more on GitHub
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

        </div>
      </Reveal>
    </section>
  );
}


export default Projects;