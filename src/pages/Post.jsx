import { useParams, Link } from "react-router-dom";
import "../styles/post.css";
import { loadPosts } from "../utils/loadPosts";
import useInView from "../hooks/useInView";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
        <div className="post-meta">
          <span>{post.formattedDate}</span>
          <span> • </span>
          <span>{post.readingTime}</span> mins read
        </div>

<article className="post-content">
  <ReactMarkdown remarkPlugins={[remarkGfm]}>
    {post.content}
  </ReactMarkdown>
</article>


      </div>
    </main>
  );
}
