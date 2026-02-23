import useInView from "../hooks/useInView";
import "../styles/blog.css";
import { loadPosts } from "../utils/loadPosts";
import { Link } from "react-router-dom";

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export default function Blog() {
  const posts = loadPosts();
  const [ref, inView] = useInView();

  return (
    <main
      ref={ref}
      className={`section blog-page ${inView ? "in-view" : ""}`}
    >
      <div className="section-inner">
        <header className="blog-header">
          <h1>Blog</h1>
          <p className="blog-intro">
            Writing about technical program management, systems design,
            delivery challenges, and lessons learned building at scale.
          </p>
        </header>

        <div className="posts-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="post-card"
            >
              <div className="post-meta">{formatDate(post.date)}</div>
              <p className="post-meta">
                {formatDate(post.date)} • {post.readingTime}
              </p>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-link">Read →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
