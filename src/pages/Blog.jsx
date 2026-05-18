import useInView from "../hooks/useInView";
import "../styles/blog.css";
import { useState, useMemo } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [ref, inView] = useInView();
  const filteredPosts = useMemo(() => {
      if (!searchQuery.trim()) return posts;

      const query = searchQuery.toLowerCase();

      return posts.filter((post) => {
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt?.toLowerCase().includes(query) ||
          post.tags?.some((tag) =>
            tag.toLowerCase().includes(query)
          )
        );
      });
  }, [searchQuery, posts]);
  console.log("filteredPosts:", filteredPosts.map(p => ({ slug: p.slug, date: p.date, readingTime: p.readingTime })));
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
        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="post-card"
            >
              <p className="post-meta">
                {formatDate(post.date)} • {post.readingTime} mins read
              </p>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-link">Read →</span>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
              No posts found.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
