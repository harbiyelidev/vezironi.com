import { config } from "@/config";

export default function Projects() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {config.projects.map(({ name, description, date, image, url }) => (
                    <div key={name} className="rounded-sm border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm relative h-full p-3">
                        <img src={image} alt={name} className="w-full h-auto object-cover rounded-md " />
                        <div className="mt-1.5">
                            <a href={url} target="_blank" className="text-base text-[hsl(var(--text-primary))] hover:underline font-['Geist-SemiBold']">{name}</a>
                            <p className="text-white/70 text-base mb-1 font-['Geist-Regular']">{description}</p>
                            <p className="text-gray-500 text-sm font-['Geist-Regular']">{date}</p>
                        </div>
                        <a href={url} target="_blank" className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all bg-[hsl(var(--text-primary))] hover:bg-[hsl(var(--text-primary))]/90 h-8 px-4 w-full gap-2 mt-2">
                            <p className="text-sm font-['Geist-Medium'] text-[hsl(var(--bg-primary))]">Buy Now!</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}