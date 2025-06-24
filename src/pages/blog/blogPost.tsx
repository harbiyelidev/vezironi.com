import { useParams } from "react-router-dom";
import { posts } from "@/posts";
import { useHeadings } from "@/hooks/useHeadings";
import clsx from "clsx";

import './blog.css';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.meta.slug === slug);
    const headings = useHeadings();

    console.log("Headings:", headings);

    if (!post) return <div className="p-4 text-center">Yazı bulunamadı</div>;

    const Component = post.default;

    return (
        <div className="flex items-start justify-between max-w-10/12 mx-auto p-4">
            <div className="prose prose-neutral dark:prose-invert max-w-6xl w-full">
                <h1 className="mb-2 blog-title">{post.meta.title}</h1>
                <p className="text-sm text-gray-500 mb-6">{post.meta.date}</p>
                <Component />
            </div>

            <aside className="w-max hidden lg:block ml-10">
                <div className="sticky top-20">
                    <p className="!text-sm font-['Geist-Regular'] !text-gray-500 !mb-2">Başlıklar</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                        {headings.map((h) => (
                            <li
                            key={h.id}
                            className={clsx({
                                "ml-0": h.level === 1,
                                "ml-2": h.level === 2,
                                "ml-4": h.level === 3,
                                "ml-6": h.level === 4,
                                "ml-8": h.level === 5,
                            })}
                            >
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
