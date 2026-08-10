import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span></span>
            Backend Engineer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            Hi, I'm
            <br />
            <span>Vikram Hankare</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            I build scalable backend systems and
            production-ready applications.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </motion.div>

          <motion.a
            href="#about"
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
          >
            Scroll to explore
            <ArrowDown size={16} />
          </motion.a>

        </div>

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
        >

          <div className="hero-card">

            <div className="hero-card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="hero-code">

              <p>
                <span className="code-purple">
                  const
                </span>{" "}
                <span className="code-blue">
                  developer
                </span>{" "}
                = {"{"}
              </p>

              <p className="code-indent">
                name:{" "}
                <span className="code-green">
                  "Vikram"
                </span>
                ,
              </p>

              <p className="code-indent">
                role:{" "}
                <span className="code-green">
                  "Backend Engineer"
                </span>
                ,
              </p>

              <p className="code-indent">
                stack:{" "}
                <span className="code-green">
                  "Java + Spring Boot"
                </span>
                ,
              </p>

              <p className="code-indent">
                passion:{" "}
                <span className="code-green">
                  "Building"
                </span>
              </p>

              <p>{"}"}</p>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;