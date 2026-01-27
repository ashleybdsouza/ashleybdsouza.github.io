import useInView from "../../hooks/useInView";
import { posts } from "../../data/posts";
import "./featured-posts.css";

export default function FeaturedPostsSection() {
  const [ref, inView] = useInView();

  return (
    <section
      ref={ref}
      className={`section featured-posts-section ${inView ? "in-view" : ""}`}
    >
      <div className="section-inner">
        <h2>Featured Posts</h2>

        <div className="posts-grid">
          {posts.slice(0, 5).map((post) => (
            <a key={post.id} href={post.url} className="post-card">
              <div className="post-meta">{post.date}</div>
              <h3 className="post-title">{post.title}</h3>
              <p className="post-excerpt">{post.excerpt}</p>
              <span className="post-link">Read →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
