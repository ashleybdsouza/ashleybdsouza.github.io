// src/utils/loadPosts.js

import matter from "gray-matter";

function parseFrontmatter(raw) {
  const { data, content } = matter(raw);
  return { data, content };
}

const postFiles = import.meta.glob("../content/posts/*.md", {
  eager: true,
  query: "raw",
  import: "default",
});

export function loadPosts() {
  console.log("postFiles keys:", Object.keys(postFiles));
  console.log("postFiles values:", Object.values(postFiles));
  
  return Object.entries(postFiles)
    .map(([path, raw]) => {
      try {
        const filenameSlug = path
          .split("/")
          .pop()
          .replace(".md", "");
        
        console.log("Processing:", path);
        console.log("Raw type:", typeof raw);
        console.log("Raw preview:", raw.substring(0, 200));


        const { data, content } = parseFrontmatter(raw);
        const slug = data.slug || filenameSlug;
        const rawDate = data.date;
        const date = rawDate instanceof Date ? rawDate : rawDate ? new Date(rawDate) : null;
        const words = (content || "").trim().split(/\s+/).length;
        const readingTime = Math.max(1, Math.ceil(words / 200));
        return {
          slug,
          ...data,
          date,
          content,
          readingTime,
          formattedDate: date
            ? date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : null,
        };
      } catch (err) {
        console.error("Failed to parse post:", path, err);
        return null;
      }
    })
    .filter(Boolean)
    .filter((post) => post.date && post.date <= new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}