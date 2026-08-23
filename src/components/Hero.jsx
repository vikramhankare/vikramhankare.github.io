import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/profile";
import CodeBlock from "./CodeBlock";

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
            {profile.role}
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
            <span>{profile.name}</span>
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
            {profile.tagline}
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
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={profile.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              aria-label="LeetCode"
            >
              <SiLeetcode size={18} />
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

            <CodeBlock
                filename="developer.js"
                language="javascript"
                code={`const developer = {
                name: "${profile.name}",
                role: "${profile.role}",
                stack: "Java + Spring Boot",
                passion: "Building"
              };`}
              />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;