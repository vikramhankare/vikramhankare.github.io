import { useEffect, useState } from "react";
import { blogs } from "./data/blogs";
import "./App.css";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Blogs from "./components/Blogs";
import BlogPage from "./components/BlogPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const backgroundVideos = [
    "dark-liquid.mp4",
    "dots.mp4",
    "old-film.mp4",
    "paper.mp4",
    "saturn.mp4",
    "squares.mp4",
    "small-squares.mp4",
    "wiggle.mp4",
  ];

  const [backgroundVideo] = useState(
    () =>
      backgroundVideos[
        Math.floor(Math.random() * backgroundVideos.length)
      ]
  );

  const getBlogFromUrl = () => {
    const path = window.location.hash;

    if (!path.startsWith("#/blog/")) {
      return null;
    }

    const slug = path.replace("#/blog/", "");

    return blogs.find((blog) => blog.slug === slug) || null;
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark";
  });

  const [currentBlog, setCurrentBlog] = useState(getBlogFromUrl);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleHashChange = () => {
      const blog = getBlogFromUrl();

      if (blog) {
        // Save the current portfolio position before opening the article
        sessionStorage.setItem(
          "portfolio-scroll-position",
          window.scrollY.toString()
        );

        setCurrentBlog(blog);

        window.scrollTo({
          top: 0,
          behavior: "instant",
        });

        return;
      }

      setCurrentBlog(null);

      // Restore the portfolio position when coming back
      const savedPosition = sessionStorage.getItem(
        "portfolio-scroll-position"
      );

      if (savedPosition !== null) {
        setTimeout(() => {
          window.scrollTo({
            top: Number(savedPosition),
            behavior: "instant",
          });

          sessionStorage.removeItem("portfolio-scroll-position");
        }, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  if (currentBlog) {
    return (
      <BlogPage
        blog={currentBlog}
        onBack={() => {
          window.location.hash = "";
        }}
      />
    );
  }

  return (
    <>

      <div className="video-background">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={`/videos/${backgroundVideo}`} type="video/mp4" />
        </video>
      </div>
      
      <ScrollProgress />
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="portfolio-surface">
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Blogs />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;