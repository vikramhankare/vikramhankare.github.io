import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about-section">
        <Reveal>
            <div className="section-container">

                <div className="section-heading">
                <span>01</span>
                <h2>About</h2>
                </div>

                <div className="about-grid">

                <div className="about-intro">
                    <p className="about-label">A little about me</p>

                    <h3>
                    Building reliable systems
                    <span> that solve real problems.</span>
                    </h3>
                </div>

                <div className="about-content">
                    <p>
                    {profile.about}
                    </p>

                    <a
                    href="#contact"
                    className="text-link"
                    >
                    Let's connect
                    <ArrowUpRight size={16} />
                    </a>
                </div>

                </div>

            </div>
        </Reveal>
    </section>
  );
}

export default About;