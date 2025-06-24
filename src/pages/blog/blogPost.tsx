import { useParams } from "react-router-dom";
import { posts } from "@/posts";
import { useHeadings } from "@/hooks/useHeadings";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.meta.slug === slug);
  const headings = useHeadings();

  if (!post) return <div className="p-4 text-center">Yazı bulunamadı</div>;

  const Component = post.default;

  return (
    <div className="flex items-start justify-between max-w-10/12 mx-auto p-4">
      <div className="prose prose-neutral dark:prose-invert max-w-3xl w-full">
        <h1 className="mb-2">{post.meta.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{post.meta.date}</p>
        <Component />
      </div>

      <aside className="w-max hidden lg:block ml-10">
        <div className="sticky top-20">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            Başlıklar
          </h2>
          <ul className="space-y-1 text-sm text-gray-300">
            {headings.map((h) => (
              <li key={h.id} className={`ml-${(h.level - 1) * 2}`}>
                <a href={`#${h.id}`} className="hover:underline">
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
