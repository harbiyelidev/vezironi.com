import { GoVersions } from "react-icons/go";
import type { ScriptVersion } from '@/models/scriptVersion';

function Versions({ data }: { data: Record<string, ScriptVersion> }) {
    return (
        <div className='rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm'>
            <div className='flex flex-col space-y-1.5 p-6'>
                <div className='flex flex-row items-center gap-1'>
                    <GoVersions className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight text-[hsl(var(--text-primary))]" />
                    <p className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight">Script Versions</p>
                </div>
                <p className="text-sm text-[hsl(var(--text-muted-foreground))]">You can follow the versions and innovations of all fivem scripts that I have made and are active!</p>
            </div>
            <div className='p-6 pt-0'>
                <div className="relative grid max-h-64 overflow-y-hidden grid-cols-1 gap-3">
                    {Object.values(data).map((script, index) => (
                        <div
                            key={index}
                            className="w-full border p-3 flex flex-col gap-2 rounded-lg bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm"
                        >
                            <div className="flex flex-row items-start justify-between">
                                <p className="text-lg font-semibold">{script.name}</p>
                                <p className="text-sm text-[hsl(var(--text-muted-foreground))]">v{script.version}</p>
                            </div>
                            {Object.entries(script.news).map(([category, entries], catIndex) => (
                                <div key={catIndex}>
                                    <p className="text-sm font-semibold">{category}</p>
                                    <ul className="list-disc ml-5 text-sm text-[hsl(var(--text-muted-foreground))]">
                                        {entries.map((entry, entryIndex) => (
                                            <li key={entryIndex}>{entry}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                    <div className="absolute inset-x-0 bottom-0 z-50 h-52 w-full bg-gradient-to-b from-transparent to-[#151515]"></div>
                    <div className="absolute inset-x-0 bottom-5 z-50 flex items-center justify-center">
                        <a href="/versions" className="inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[hsl(var(--text-primary))] hover:bg-[hsl(var(--text-primary))/90] h-10 px-4 py-2 w-fit gap-2">
                            <p className="text-sm font-['Geist-Medium'] text-[hsl(var(--text-foreground))]">Check all versions</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Versions;