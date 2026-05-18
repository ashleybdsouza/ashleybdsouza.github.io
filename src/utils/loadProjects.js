// src/utils/loadProjects.js
import matter from "gray-matter";

function parseFrontmatter(raw) {
  const { data, content } = matter(raw);
  return { data, content };
}

const projectFiles = import.meta.glob("../content/projects/*.md", {
  eager: true,
  query: "raw",
  import: "default",
});

export function loadProjects() {
  return Object.entries(projectFiles)
    .map(([path, raw]) => {
      const filenameSlug = path.split("/").pop().replace(".md", "");
      const { data, content } = parseFrontmatter(raw);
      const slug = data.slug || filenameSlug;
      const date = data.date ? new Date(data.date) : null;

      return {
        slug,
        ...data,
        date,
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
    .filter((project) => project.title)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
