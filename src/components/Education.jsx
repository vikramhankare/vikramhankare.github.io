import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { education } from "../data/education";

function Education() {
  return (
    <section id="education" className="education-section">
      <Reveal>
        <div className="section-container">

          <div className="section-heading">
            <span>04</span>
            <h1>Education</h1>
          </div>

          <div className="education-list">
            {education.map((item, index) => (
              <motion.article
                className="education-item"
                key={`${item.institution}-${item.degree}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="education-period">
                  <GraduationCap size={15} />
                  <span>{item.period}</span>
                </div>

                <div className="education-content">
                  <div className="education-header">
                    <div className="education-main">
                        <h3>{item.degree}</h3>

                        <div className="education-institution">
                        {item.institution}
                        </div>

                        <div className="education-location">
                        {item.location}
                        </div>
                    </div>

                    <div className="education-cgpa">
                        CGPA: {item.cgpa}/10.0
                    </div>
                    </div>

                  <p className="education-description">
                    {item.description}
                  </p>

                  <div className="education-highlights">
                    {item.highlights.map((highlight) => (
                      <span key={highlight}>{highlight}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </Reveal>
    </section>
  );
}

export default Education;