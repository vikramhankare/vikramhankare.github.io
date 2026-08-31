import Reveal from "./Reveal";
import { blogs } from "../data/blogs";

function Blogs() {
  return (
    <section id="blogs" className="blogs-section">
      <Reveal>
        <div className="section-container">

          <div className="section-heading">
            <span>06</span>
            <h1>Blogs (Coming Soon...)</h1>
          </div>

          <p className="blogs-intro">
            Notes, ideas, and things I've learned while building software.{" "}
            {/* <span style={{ color: "#ff1744" }}>
              (COMING SOON...)
            </span> */}
          </p>

          {blogs.length > 0 && (
            <div className="blogs-list">
              {blogs.map((blog, index) => (
                <article className="blog-card" key={blog.slug}>
                  <div className="blog-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <span>{blog.category}</span>
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>

                    <h3>{blog.title}</h3>

                    <p>{blog.description}</p>

                    <div className="blog-bottom">
                      <div className="blog-tags">
                        {blog.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <a
                        href={`#/blog/${blog.slug}`}
                        className="blog-read-link"
                        aria-label={`Read ${blog.title}`}
                      >
                        Read article
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </Reveal>
    </section>
  );
}

export default Blogs;