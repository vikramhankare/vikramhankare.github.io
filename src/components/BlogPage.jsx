import { ArrowLeft, ArrowUp, Share2, Heart } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import { getVisitorId, getVisitorName } from "../utils/visitor";
import ScrollProgress from "./ScrollProgress";
import Footer from "./Footer";

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
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const visitorId = getVisitorId();
  const visitorName = getVisitorName();
  useEffect(() => {
    const loadInteractions = async () => {
      try {
        const response = await fetch(
            `${import.meta.env.VITE_API_BASE_URL}/api/blog/interactions/${blog.slug}?visitorId=${visitorId}`
          );

        if (!response.ok) {
          throw new Error("Failed to load interactions");
        }

        const data = await response.json();

        setLikeCount(data.likeCount);

        setLiked(data.visitorHasLiked);

        setComments(data.comments || []);

      } catch (error) {
        console.error("Failed to load blog interactions:", error);
      }
    };

    loadInteractions();
  }, [blog.slug]);

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
    <>
    <ScrollProgress />

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
                rehypePlugins={[rehypeHighlight]}
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
              className={`blog-action-button ${liked ? "liked" : ""}`}
              onClick={async () => {
                try {
                  if (!liked) {
                    const response = await fetch(
                      `${import.meta.env.VITE_API_BASE_URL}/api/blog/interactions`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          blogSlug: blog.slug,
                          type: "BLOG_LIKE",
                          visitorId,
                        }),
                      }
                    );

                    if (!response.ok) {
                      throw new Error("Failed to like blog");
                    }

                    setLiked(true);
                    setLikeCount((previous) => previous + 1);
                  } else {
                    const response = await fetch(
                      `${import.meta.env.VITE_API_BASE_URL}/api/blog/interactions/blog-like?blogSlug=${blog.slug}&visitorId=${visitorId}`,
                      {
                        method: "DELETE",
                      }
                    );

                    if (!response.ok) {
                      throw new Error("Failed to unlike blog");
                    }

                    setLiked(false);
                    setLikeCount((previous) => previous - 1);
                  }
                } catch (error) {
                  console.error("Blog like toggle failed:", error);
                }
              }}
              aria-label="Like this article"
            >
              <Heart
                size={18}
                fill={liked ? "currentColor" : "none"}
              />
              {likeCount}
            </button>

            <button
              className="blog-action-button"
              onClick={handleShare}
            >
              <Share2 size={18} />
              Share
            </button>

            <button
              className="blog-action-button"
              onClick={handleScrollToTop}
            >
              <ArrowUp size={18} />
              Top
            </button>

          </div>


          {/* Comments */}
          <section className="blog-comments">

            <h2>Comments</h2>

            <div className="comment-form">

              <input
                type="text"
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      event.currentTarget.nextElementSibling?.click();
                    }
                  }}
                placeholder="Add a comment..."
                aria-label="Add a comment"
              />

              <button
                className="blog-action-button"
                disabled={!commentText.trim()}
                onClick={async () => {
                  try {
                    const response = await fetch(
                      `${import.meta.env.VITE_API_BASE_URL}/api/blog/interactions`,
                      {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          blogSlug: blog.slug,
                          type: "COMMENT",
                          anonymousName: visitorName,
                          content: commentText.trim(),
                          visitorId,
                        }),
                      }
                    );

                    if (!response.ok) {
                      throw new Error("Failed to post comment");
                    }

                    const newComment = await response.json();

                    setComments((previous) => [
                      ...previous,
                      {
                        id: newComment.id,
                        anonymousName: newComment.anonymousName,
                        content: newComment.content,
                        createdAt: newComment.createdAt,
                        likeCount: 0,
                        visitorHasLiked: false,
                        visitorId,
                      },
                    ]);

                    setCommentText("");

                  } catch (error) {
                    console.error("Comment failed:", error);
                  }
                }}
              >
                Post
              </button>

            </div>


            <div className="comments-list">

              {comments.map((comment) => (

                <article
                  className="comment-card"
                  key={comment.id}
                >

                  <div className="comment-content">

                    <div className="comment-header">
                      <strong>{comment.anonymousName}</strong>

                      <span>
                        {new Date(comment.createdAt).toLocaleString()}
                      </span>
                    </div>

                    <p>{comment.content}</p>

                  </div>


                  <div className="comment-actions">

                    <button
                      className={`blog-action-button ${
                        comment.visitorHasLiked ? "liked" : ""
                      }`}
                      onClick={async () => {
                        try {
                          const response = await fetch(
                            `${import.meta.env.VITE_API_BASE_URL}/api/blog/interactions/comment/${comment.id}/like`,
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                blogSlug: blog.slug,
                                visitorId,
                              }),
                            }
                          );

                          if (!response.ok) {
                            throw new Error("Failed to like comment");
                          }

                          setComments((previous) =>
                            previous.map((item) =>
                              item.id === comment.id
                                ? {
                                    ...item,
                                    likeCount: item.visitorHasLiked
                                      ? item.likeCount
                                      : item.likeCount + 1,
                                    visitorHasLiked: true,
                                  }
                                : item
                            )
                          );

                        } catch (error) {
                          console.error("Comment like failed:", error);
                        }
                      }}
                      aria-label="Like comment"
                    >
                      <Heart
                        size={18}
                        fill={
                          comment.visitorHasLiked
                            ? "currentColor"
                            : "none"
                        }
                      />
                      {comment.likeCount}
                    </button>


                    {comment.visitorId === visitorId && (
                      <button
                        className="blog-action-button"
                        onClick={async () => {
                          try {
                            const response = await fetch(
                              `${import.meta.env.VITE_API_BASE_URL}/api/blog/interactions/${comment.id}?visitorId=${visitorId}`,
                              {
                                method: "DELETE",
                              }
                            );

                            if (!response.ok) {
                              throw new Error("Failed to delete comment");
                            }

                            setComments((previous) =>
                              previous.filter(
                                (item) => item.id !== comment.id
                              )
                            );

                          } catch (error) {
                            console.error(
                              "Comment deletion failed:",
                              error
                            );
                          }
                        }}
                        aria-label="Delete comment"
                      >
                        🗑️
                      </button>
                    )}

                  </div>

                </article>

              ))}

            </div>

          </section>


          {/* Blog footer */}
          <Footer />
      </div>
    </main>
    </>
  );
}

export default BlogPage;