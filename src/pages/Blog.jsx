import useInView from "../hooks/useInView";
import "../styles/blog.css";
import { useState, useMemo } from "react";
import { loadPosts } from "../utils/loadPosts";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 5;

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

export default function Blog() {
  const posts = useMemo(() => loadPosts(), []);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ref, inView] = useInView();

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;
    const query = searchQuery.toLowerCase();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(query) ||
      post.excerpt?.toLowerCase().includes(query) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery, posts]);

  // Reset to page 1 when search changes
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // reset to page 1 on new search
  }

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
            onChange={handleSearch}
            className="search-input"
          />
        </div>

        <div className="posts-grid">
          {paginatedPosts.map((post) => (
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

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}