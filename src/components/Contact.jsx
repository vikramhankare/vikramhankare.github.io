import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Reveal from "./Reveal";

import { profile } from "../data/profile";

function Contact() {
  return (
    <section id="contact" className="contact-section">
        <Reveal>
            <div className="section-container">

                <div className="section-heading">
                <span>06</span>
                <h1>Contact</h1>
                </div>

                <div className="contact-content">

                <div className="contact-intro">
                    <p className="contact-label">
                    Have a project in mind?
                    </p>

                    <h3>
                    Let's build something
                    <span> useful together.</span>
                    </h3>
                </div>

                <div className="contact-actions">

                    <a
                    href={profile.email}
                    className="contact-email"
                    >
                    <Mail size={20} />

                    <span>
                        {profile.email.replace("mailto:", "")}
                    </span>

                    <ArrowUpRight size={18} />
                    </a>

                    <div className="contact-socials">

                    <a
                        href={profile.github}
                        className="contact-GitHub"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                        <span>GitHub</span>
                    </a>

                    <a
                        href={profile.linkedin}
                        className="contact-LinkedIn"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn size={20} />
                        <span>LinkedIn</span>
                    </a>

                    </div>

                </div>

                </div>

            </div>
        </Reveal>
    </section>
  );
}

export default Contact;