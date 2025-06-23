import type { BlogModule } from "@/types/blog";
const modules = import.meta.glob<BlogModule>("./*.mdx", { eager: true });

export const posts = Object.values(modules).map((mod) => ({
    meta: mod.meta,
    default: mod.default,
}));