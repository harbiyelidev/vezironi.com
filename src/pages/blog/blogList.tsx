import { posts } from "@/posts";

export default function BlogList() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Blog</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map(({ meta }) => (
                    <div key={meta.slug} className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm relative h-full p-3">
                        <img src={meta.image} alt={meta.title} className="w-full h-auto object-cover rounded-md" />
                        <div className="mt-1.5">
                            <a href={`/blog/${meta.slug}`} className="text-base text-[hsl(var(--text-primary))] hover:underline font-['Geist-SemiBold']">{meta.title}</a>
                            <p className="text-gray-500 text-sm">{meta.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}