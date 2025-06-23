import { GoVersions } from "react-icons/go";

import type { ScriptVersion, Data } from '@/models/scriptVersion'

function Versions({ data }: { data: ScriptVersion }) {
    return (
        <div className='rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm'>
            <div className='flex flex-col space-y-1.5 p-6'>
                <div className='flex flex-row items-center gap-1'>
                    <GoVersions className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight" />
                    <p className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight">Script Versions</p>
                </div>
                <p className="text-sm text-[hsl(var(--text-foreground))]">You can follow the versions and innovations of all fivem scripts that I have made and are active!</p>
            </div>
            <div className='p-6'>
                <div className="relative grid max-h-64 grid-cols-1 gap-3 overflow-hidden">
                    {data.map((item: Data, index: number) => (
                        <div key={index} className="w-full border p-1.5 flex flex-col gap-1 rounded-lg bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm">
                            <div className="flex flex-row items-start gap-1">
                                <p className="text-lg font-semibold">{item.name}</p>
                                <p className="text-sm text-[hsl(var(--text-muted-foreground))]">v{item.version}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Versions;