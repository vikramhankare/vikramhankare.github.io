import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { profile } from "../data/profile";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="section-container">

        <div className="footer-top">

          <a
            href="#home"
            className="footer-logo"
          >
            VH
          </a>

          <div className="footer-links">

            <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
            >
              <FaGithub size={17} />
            </a>

            <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
            >
              <FaLinkedinIn size={17} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={17} />
            </button>

          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Vikram Hankare
          </span>

          <span>
            Built with React
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;