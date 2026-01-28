import { useParams, Link } from "react-router-dom";
import "../styles/post.css";
import { loadPosts } from "../utils/loadPosts";
import useInView from "../hooks/useInView";


export default function Post() {
  const posts = loadPosts();
  const { slug } = useParams();
  const [ref, inView] = useInView(); // hook to detect when section is visible

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="section post-page no-animate">
        <div className="section-inner">
          <h2>Post not found</h2>
          <Link to="/blog">← Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section post-page no-animate">
      <div className="section-inner post-inner">
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>

        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">{post.formattedDate}</div>

        <article className="post-content">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("#### ")) {
              return <h4 key={i}>{line.replace("#### ", "")}</h4>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i}>{line.replace("### ", "")}</h3>;
            }
            if (line.startsWith("## ")) {
              return <h2 key={i}>{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("> ")) {
              const text = line.replace("> ", "");
              const type = text.startsWith("Example")
                ? "example"
                : text.startsWith("Story")
                ? "story"
                : "note";

              return (
                <blockquote key={i} className={`callout ${type}`}>
                  {text}
                </blockquote>
              );
            }
            if (line.startsWith("![")) {
              const match = line.match(/!\[(.*)\]\((.*)\)/);
              if (match) {
                return (
                  <img
                    key={i}
                    src={match[2]}
                    alt={match[1]}
                    className="post-image"
                  />
                );
              }
            }
            if (line.trim() === "") {
              return <br key={i} />;
            }
            return <p key={i}>{line}</p>;
          })}
        </article>

      </div>
    </main>
  );
}
