import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills-section">
        <Reveal>
            <div className="section-container">

                <div className="section-heading">
                <span>02</span>
                <h1>Skills</h1>
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