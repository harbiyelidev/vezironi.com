// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "@/posts";

const BlogList = () => {
    // const [data, setData] = useState(posts);


    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <ul>
                {posts.map(({ meta }) => (
                    <li key={meta.slug} className="mb-4">
                        <Link to={`/blog/${meta.slug}`} className="text-xl text-blue-600 hover:underline">{meta.title}</Link>
                        <p className="text-gray-500 text-sm">{meta.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogList;