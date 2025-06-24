import { config } from "@/config";
import { LiaBookSolid } from "react-icons/lia";

function Projects() {
    return (
        <div className='rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm'>
            <div className='flex flex-col space-y-1.5 p-6'>
                <div className='flex flex-row items-center gap-1'>
                    <LiaBookSolid className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight text-[hsl(var(--text-primary))]" />
                    <p className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight">Projects</p>
                </div>
                <p className="text-sm text-[hsl(var(--text-muted-foreground))]">You can find all my projects here.</p>
            </div>
            <div className='p-6 py-0'>
                <div className="relative grid max-h-80 grid-cols-1 gap-3 overflow-hidden md:grid-cols-2">
                    {config.projects.map(({ name, description, date, image, url }) => (
                        <div key={name} className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm relative h-full p-3">
                            <img src={image} alt={name} className="w-full h-auto object-cover rounded-md " />
                            <div className="mt-1.5">
                                <a href={url} target="_blank" className="text-base text-[hsl(var(--text-primary))] hover:underline font-['Geist-SemiBold']">{name}</a>
                                <p className="text-white/70 text-base mb-1 font-['Geist-Regular']">{description}</p>
                                <p className="text-gray-500 text-sm font-['Geist-Regular']">{date}</p>
                            </div>
                            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-['Geist-Medium'] ring-offset-[hsl(var(--text-primary))] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] hover:bg-[hsl(var(--text-primary))]/90 h-10 px-4 py-2 w-full gap-2">
                                <a href={url} target="_blank" className="text-sm font-['Geist-Medium'] text-[hsl(var(--bg-primary))]">Buy Now!</a>
                            </div>
                        </div>
                    ))}
                    <div className="absolute inset-x-0 bottom-0 z-50 h-52 w-full bg-gradient-to-b from-transparent to-[#151515]"></div>
                    <div className="absolute inset-x-0 bottom-5 z-50 flex items-center justify-center">
                        <a href="/projects" className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(var(--text-primary))] hover:bg-[hsl(var(--text-primary))]/90 h-10 px-4 py-2 w-fit gap-2">
                            <p className="text-sm font-['Geist-Medium'] text-[hsl(var(--bg-primary))]">All Projects</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;