import type { BlogModule } from "@/types/blog";

const modules = import.meta.glob<BlogModule>("./*.mdx", { eager: true });

export const posts = Object.values(modules)
  .map((mod) => ({
    meta: mod.meta,
    default: mod.default,
  }))
  .sort((a, b) => {
    const dateA = new Date(a.meta.date).getTime();
    const dateB = new Date(b.meta.date).getTime();
    return dateB - dateA;
  });
