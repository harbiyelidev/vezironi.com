import React from "react";
import { VscTerminalBash } from "react-icons/vsc";

import { config } from "@/config";

function Technologies() {
    return (
        <div className='rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm'>
            <div className='flex flex-col space-y-1.5 p-6'>
                <div className='flex flex-row items-center gap-1'>
                    <VscTerminalBash className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight text-[hsl(var(--text-primary))]" />
                    <p className="text-2xl font-['Geist-SemiBold'] leading-none tracking-tight">My Technologies</p>
                </div>
                <p className="text-sm text-[hsl(var(--text-muted-foreground))]"></p>
            </div>
            <div className='group mx-auto mb-4 max-w-[50vh items-center justify-center p-0'>
                <div className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]" style={{
                    '--animation-direction': 'reverse',
                    '--animation-duration': '30s',
                } as React.CSSProperties}>
                   <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2 animate-scroll hover:[animation-play-state:paused]">
                        {config.languages.map((language) => (
                            <li key={language.name} className="group relative flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-[hsl(var(--bg-primary))]/90 px-5 py-2 transition hover:bg-[hsl(var(--bg-primary))]/70">
                                <p className="font-['Geist-Bold']">{language.name}</p>
                            </li>
                        ))}
                   </ul>
                </div>
                <div className="scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]" style={{
                    '--animation-direction': 'forwards',
                    '--animation-duration': '30s',
                } as React.CSSProperties}>
                   <ul className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2 animate-scroll hover:[animation-play-state:paused]">
                        {config.technologies.map((technology) => (
                            <li key={technology.name} className="group relative flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-[hsl(var(--bg-primary))]/90 px-5 py-2 transition hover:bg-[hsl(var(--bg-primary))]/70">
                                <p className="font-['Geist-Bold']">{technology.name}</p>
                            </li>
                        ))}
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default Technologies;