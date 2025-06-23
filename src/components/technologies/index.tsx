import { VscTerminalBash } from "react-icons/vsc";

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
            <div className='p-6 py-0'>
                <div className="relative flex items-center overflow-x-hidden">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="h-full w-full"
                    >
                        {config.languages.map((language) => (
                            <SwiperSlide key={language.name} className="flex items-center justify-center">
                                <div className="relative flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-[hsl(var(--bg-primary))]/90 px-5 py-3 transition duration-300 hover:bg-[hsl(var(--bg-primary))]">
                                    <img src={`/icons/${language.icon}.svg`} alt={language.name} className="h-10 w-10" />
                                    <p className="text-sm font-['Geist-Semibold'] text-[hsl(var(--text-primary))]">{language.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Technologies;