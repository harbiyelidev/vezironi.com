import { FaPlus, FaStar } from "react-icons/fa";
import { TbBriefcaseFilled } from "react-icons/tb";
import { HiMiniUsers } from "react-icons/hi2";

function Experience() {
  return (
    <section className="grid w-full grid-cols-2 gap-4 max-md:w-full lg:grid-cols-3">
        <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm max-md:h-full">
            <div className="flex flex-col items-center justify-center gap-1 p-4 md:p-6">
                <div className="flex items-center font-['Geist-Bold']">
                    <p className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-['Geist-Bold] text-4xl text-transparent md:text-5xl">
                        24
                    </p>
                    <FaPlus className="text-[hsl(var(--text-primary))] size-6 md:size-8" />
                </div>
                <div className="relative flex w-fit items-center justify-center gap-1 rounded-lg bg-[hsl(var(--bg-secondary))] px-3 py-1 md:px-3 md:py-1.5">
                    <TbBriefcaseFilled className="text-[hsl(var(--text-primary))] size-6" />
                    <p className="text-sm font-['Geist-Semibold'] text-gray-400">Projects</p>
                </div>
            </div>
        </div>
        <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm max-md:h-full">
            <div className="flex flex-col items-center justify-center gap-1 p-4 md:p-6">
                <div className="flex items-center font-['Geist-Bold']">
                    <p className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-['Geist-Bold] text-4xl text-transparent md:text-5xl">
                        7
                    </p>
                    <FaPlus className="text-[hsl(var(--text-primary))] size-6 md:size-8" />
                </div>
                <div className="relative flex w-fit items-center justify-center gap-1 rounded-lg bg-[hsl(var(--bg-secondary))] px-3 py-1 md:px-3 md:py-1.5">
                    <HiMiniUsers className="text-[hsl(var(--text-primary))] size-6" />
                    <p className="text-sm font-['Geist-Semibold'] text-gray-400">Clients</p>
                </div>
            </div>
        </div>
        <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-sm max-md:h-full">
            <div className="flex flex-col items-center justify-center gap-1 p-4 md:p-6">
                <div className="flex items-center font-['Geist-Bold']">
                    <p className="bg-gradient-to-b from-white to-gray-800 bg-clip-text font-['Geist-Bold] text-4xl text-transparent md:text-5xl">
                        5
                    </p>
                    <FaPlus className="text-[hsl(var(--text-primary))] size-6 md:size-8" />
                </div>
                <div className="relative flex w-fit items-center justify-center gap-1 rounded-lg bg-[hsl(var(--bg-secondary))] px-3 py-1 md:px-3 md:py-1.5">
                    <FaStar className="text-[hsl(var(--text-primary))] size-6" />
                    <p className="text-sm font-['Geist-Semibold'] text-gray-400">Yrs Expertise</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Experience;