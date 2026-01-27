import { Link } from "react-router-dom";

export default function FeaturedPostsSection() {
  return (
    <section className="featured-posts">
      <h2>Featured Writing</h2>

      <ul>
        <li>
          <Link to="/blog">How TPMs Think in Systems</Link>
        </li>
        <li>
          <Link to="/blog">Driving Cross-Team Alignment</Link>
        </li>
      </ul>
    </section>
  );
}
