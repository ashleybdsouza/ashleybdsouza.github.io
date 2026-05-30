// src/utils/loadPosts.js

import matter from "gray-matter";
console.log("=== loadPosts module loaded ===");
function parseFrontmatter(raw) {
  const { data, content } = matter(raw);
  return { data, content };
}

let postFiles = {};
try {
  postFiles = import.meta.glob("../content/posts/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
  });
  console.log("glob loaded, keys:", Object.keys(postFiles));
} catch (err) {
  console.error("glob failed:", err);
}


/*const postFiles = import.meta.glob("../content/posts/*.md", {
  eager: true,
  query: "?raw",       // ← correct
  import: "default",
});*/

export function loadPosts() {
  //console.log("postFiles keys:", Object.keys(postFiles));
  //console.log("postFiles values:", Object.values(postFiles));
  
  return Object.entries(postFiles)
    .map(([path, raw]) => {
      console.log("→ starting:", path);
      try {
        const filenameSlug = path
          .split("/")
          .pop()
          .replace(".md", "");
        //console.log("Processing:", path);
        //console.log("Raw type:", typeof raw);
        //console.log("Raw preview:", raw.substring(0, 200));
        const { data, content } = parseFrontmatter(raw);
        const slug = data.slug || filenameSlug;
        const rawDate = data.date;
        const date = rawDate instanceof Date ? rawDate : rawDate ? new Date(rawDate) : null;
        const words = (content || "").trim().split(/\s+/).length;
        const readingTime = Math.max(1, Math.ceil(words / 200));
        
        console.log("✅ done:", path);

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
        console.error("❌ failed:", path, err);
        return null;
      }
    })
    .filter(Boolean)
    //.filter((post) => post.date && post.date <= new Date())
    // To this — removes the future-date gate entirely while debugging:
    .filter((post) => {
      const postDate = new Date(post.date);
      postDate.setHours(0, 0, 0, 0);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const passes = postDate <= today;
      console.log(post.slug, "postDate:", postDate, "today:", today, "passes:", passes);
      return passes;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (isNaN(dateA) || isNaN(dateB)) {
        console.error("Bad date found:", a.slug, a.date, b.slug, b.date);
        return 0;
      }
      return dateB - dateA;
    });
}