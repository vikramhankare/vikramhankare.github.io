import { ArrowLeft, ArrowUp, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const blogFiles = import.meta.glob(
  "../data/blogs/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

const blogAssets = import.meta.glob(
  "../data/blogs/assets/**/*",
  {
    query: "?url",
    import: "default",
    eager: true,
  }
);

// console.log("BLOG ASSETS:", blogAssets);

function BlogPage({ blog, onBack }) {
  if (!blog) {
    return (
      <main className="blog-page">
        <div className="blog-page-container">
          <button onClick={onBack} className="blog-back-button">
            <ArrowLeft size={18} />
            Back to portfolio
          </button>

          <h1>Blog not found</h1>
        </div>
      </main>
    );
  }

    const blogPath = `../data/blogs/${blog.slug}.md`;
    const markdown = blogFiles[blogPath];

    const resolveBlogAsset = (src) => {
        // console.log("IMAGE SRC:", src);

        if (!src?.startsWith("../assets/")) {
            return src;
        }

        const assetPath = `../data/blogs/assets/${src.replace(
            "../assets/",
            ""
        )}`;

        // console.log("LOOKING FOR:", assetPath);
        // console.log("FOUND:", blogAssets[assetPath]);

        return blogAssets[assetPath] || src;
        };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Blog link copied!");
    } catch {
      alert("Unable to copy the link.");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    };

  return (
    <main className="blog-page">

      <div className="blog-page-container">

        {/* Back to portfolio */}
        <button
          className="blog-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          Back to portfolio
        </button>

        {/* Article header */}
        <header className="blog-article-header">

          <div className="blog-meta">
            <span>{blog.category}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>

          <h1>{blog.title}</h1>

          <p className="blog-article-description">
            {blog.description}
          </p>

        </header>

        {/* Article content */}
        <article className="blog-article-content">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    img: ({ src, alt, ...props }) => (
                    <img
                        src={resolveBlogAsset(src)}
                        alt={alt || ""}
                        {...props}
                    />
                    ),
                }}
                >
                {markdown || "Article content is unavailable."}
                </ReactMarkdown>
        </article>

        {/* Article actions */}
        <div className="blog-article-actions">

          <button
                className="blog-action-button"
                onClick={handleScrollToTop}
            >
                <ArrowUp size={18} />
                Top
            </button>
          
          <button
            className="blog-action-button"
            onClick={handleShare}
          >
            <Share2 size={18} />
            Share
          </button>

        </div>

      </div>

    </main>
  );
}

export default BlogPage;