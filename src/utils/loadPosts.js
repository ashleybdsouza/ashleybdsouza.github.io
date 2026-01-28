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

console.log(postFiles);

export function loadPosts() {
  return Object.entries(postFiles)
    .map(([path, raw]) => {
      const filenameSlug = path.split("/").pop().replace(".md", "");
      const { data, content } = parseFrontmatter(raw);

      const slug = data.slug || filenameSlug;
      const date = data.date ? new Date(data.date) : null;

      return {
        slug,
        ...data,
        date, // keep original date
        content,
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
