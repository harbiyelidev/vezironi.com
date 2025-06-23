import { TbLanguage, TbTimezone } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCoffee, BiSolidHome } from "react-icons/bi";
import { BsCalendarDateFill, BsMailbox2Flag } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

import { config } from "@/config";

import type { ProfileData } from '@/models/discordProfile.ts'

function Profile({ profile }: { profile: ProfileData | null }) {
  if (!profile) {
    return <p className='text-center text-gray-400'>Profile data not available.</p>;
  };

  return (
    <section className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md">
      <div className="p-6 pt-0 mt-5">
        <div className="flex flex-row items-center">
          <img src={`https://cdn.discordapp.com/avatars/${config.discord.id}/${profile?.discord_user?.avatar}.png`} alt="its_me" width={100} height={100} loading='eager' decoding='async' className='rounded-xl' />
          <div className="ml-4 flex flex-col gpa-y-1">
            <div className={`rounded-full px-2.5 py-0.5 text-xs font-["Geist-Semibold"] mb-auto flex w-fit items-center justify-center gap-1 ${profile.discord_status === 'online' ? 'bg-green-500/20 text-green-500' : profile.discord_status === 'idle' ? 'bg-yellow-500/20 text-yellow-500' : profile.discord_status === 'dnd' ? 'bg-red-500/20 text-red-500' : 'bg-gray-500/20 text-gray-500'}`}>
              <p className="font-['Geist-Semibold']">
                {profile.discord_status === 'online' ? 'I\'m Working now!' : profile.discord_status === 'idle' ? 'I\'m Taking a break!' : profile.discord_status === 'dnd' ? 'I\'m Busy!' : 'I\'m Offline!'}
              </p>
            </div>
            <h1 className="text-2xl font-['Geist-Bold'] text-[hsl(var(--text-primary))]">{config.discord.globalName}</h1>
            <div className="font-['Geist-Semibold'] text-gray-400">
              <div className="flex flex-col gap-1 md:flex-row md:items-center">I'm a <span className="font-['Geist-Bold'] text-[hsl(var(--text-primary))]">Web and Game Developer</span></div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex max-w-[65.43075245365321vh] flex-wrap gap-2 rounded-xl bg-[hsl(var(--bg-primary))] p-3">
          <div className="flex flex-row items-center gap-1 rounded-md bg-[hsl(var(--bg-secondary))]/60 py-1 pl-3 pr-4 transition duration-300 max-md:grow">
            <TbLanguage className='text-[hsl(var(--text-primary))]' />
            <p className="text-sm font-['Geist-Semibold'] text-gray-400">Turkish & English</p>
          </div>
          <div className="flex flex-row items-center gap-1 rounded-md bg-[hsl(var(--bg-secondary))]/60 py-1 pl-3 pr-4 transition duration-300 max-md:grow">
            <FaLocationDot className='text-[hsl(var(--text-primary))]' />
            <p className="text-sm font-['Geist-Semibold'] text-gray-400">Turkiye</p>
          </div>
          <div className="flex flex-row items-center gap-1 rounded-md bg-[hsl(var(--bg-secondary))]/60 py-1 pl-3 pr-4 transition duration-300 max-md:grow">
            <TbTimezone className='text-[hsl(var(--text-primary))]' />
            <p className="text-sm font-['Geist-Semibold'] text-gray-400">UTC +3</p>
          </div>
          <div className="flex flex-row items-center gap-1 rounded-md bg-[hsl(var(--bg-secondary))]/60 py-1 pl-3 pr-4 transition duration-300 max-md:grow">
            <BiSolidCoffee className='text-[hsl(var(--text-primary))]' />
            <p className="text-sm font-['Geist-Semibold'] text-gray-400">+0 Coffee</p>
          </div>
          <div className="flex flex-row items-center gap-1 rounded-md bg-[hsl(var(--bg-secondary))]/60 py-1 pl-3 pr-4 transition duration-300 max-md:grow">
            <BiSolidHome className='text-[hsl(var(--text-primary))]' />
            <p className="text-sm font-['Geist-Semibold'] text-gray-400">Freelancer</p>
          </div>
          <div className="flex flex-row items-center gap-1 rounded-md bg-[hsl(var(--bg-secondary))]/60 py-1 pl-3 pr-4 transition duration-300 max-md:grow">
            <BsCalendarDateFill className='text-[hsl(var(--text-primary))]' />
            <p className="text-sm font-['Geist-Semibold'] text-gray-400">19y/o</p>
          </div>
        </div>
        <div className='mt-5 flex flex-row items-center gap-2'>
          <a href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-['Geist-Medium'] ring-offset-[hsl(var(--text-primary))] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[hsl(var(--text-primary))] text-[hsl(var(--bg-primary))] hover:bg-[hsl(var(--text-primary))]/90 h-10 px-4 py-2 w-full gap-2">
            <BsMailbox2Flag className='text-xl text-[hsl(var(--bg-primary))]' />
            Contact Me
          </a>
          <a target="_blank" href={`https://github.com/${config.github.username}`} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-['Geist-Medium'] ring-offset-[hsl(var(--bg-secondary))] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-[hsl(var(--bg-secondary))] text-[hsl(var(--text-foreground))] hover:bg-[hsl(var(--bg-secondary))]/90 h-10 px-4 py-2 w-full gap-2">
            <FaGithub className='text-xl text-[hsl(var(--text-forg))]' />
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;