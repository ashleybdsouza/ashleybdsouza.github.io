// src/utils/loadPosts.js
import matter from "gray-matter";

function parseFrontmatter(raw) {
  const { data, content } = matter(raw);
  return { data, content };
}

const postFiles = import.meta.glob("../content/posts/*.md", {
  eager: true,
  as: "raw"
});

export function loadPosts() {
  return Object.entries(postFiles)
    .map(([path, raw]) => {
      const filenameSlug = path.split("/").pop().replace(".md", "");
      const { data, content } = parseFrontmatter(raw);

      const slug = data.slug || filenameSlug;
      const date = data.date ? new Date(data.date) : null;

      // ✅ Browser-safe reading time
      const words = content.trim().split(/\s+/).length;
      const readingTimeMinutes = Math.ceil(words / 200);

      return {
        slug,
        ...data,
        date,
        content,
        readingTime: `${readingTimeMinutes} min read`,
        readingTimeMinutes,

        formattedDate: date
          ? date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
          : null,
      };
    })
    .filter((post) => post.date)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}