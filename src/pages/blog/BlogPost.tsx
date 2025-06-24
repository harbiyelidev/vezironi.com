import { useParams } from "react-router-dom";
import { posts } from "@/posts";

const BlogPost = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find(p => p.meta.slug === slug);

    if (!post) return <div className="p-4 text-center">Yazı bulunamadı</div>;

    const Component = post.default;
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{post.meta.date}</p>
            <div className="prose">
                <Component />
            </div>
        </div>
    );
}

export default BlogPost;