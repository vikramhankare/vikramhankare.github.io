import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "../data/profile";

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={handleNavClick}
        >
          {profile.shortName}
        </a>

        {/* Navigation */}
        <nav
          className={`navbar-links ${
            isMenuOpen ? "open" : ""
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile GitHub */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-github-link"
            onClick={handleNavClick}
          >
            <FaGithub size={19} />
            GitHub
          </a>

          {/* Mobile theme */}
          <button
            className="mobile-theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}

            <span>
              {theme === "dark"
                ? "Light mode"
                : "Dark mode"}
            </span>
          </button>
        </nav>

        {/* Desktop controls */}
        <div className="desktop-controls">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-github"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

        </div>

        {/* Mobile controls */}
        <div className="mobile-controls">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;