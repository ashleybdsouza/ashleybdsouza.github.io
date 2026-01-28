import useInView from "../../hooks/useInView";
import { loadPosts } from "../../utils/loadPosts";
import "./featured-posts.css";
import "../../styles/landing.css";
import { Link } from "react-router-dom";

export default function FeaturedPostsSection() {
  const [ref, inView] = useInView();
  const posts = loadPosts().slice(0, 5);
  console.log(posts);
  return (
    <section
      ref={ref}
      className={`section featured-posts-section ${inView ? "in-view" : ""}`}
    >
      <div className="section-inner">
        <h2>Featured Posts</h2>

        <div className="posts-grid">
          {posts.slice(0, 5).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="post-card"
            >
              <div className="post-meta">{post.formattedDate}</div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-link">Read →</span>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
