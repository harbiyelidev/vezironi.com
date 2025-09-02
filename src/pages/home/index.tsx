// import LogoLoop from '../../components/Effects/LogoLoop';
// import ShinyText from '../../components/Effects/ShinyText';
// import Navbar from '../../components/Navbar';

// const imageLogos = [
//    { src: "/logos/0resmon.png", alt: "0Resmon", href: "https://0resmon.tebex.io/" },
//    { src: "/logos/borp.png", alt: "BORP", href: "" },
//    { src: "/logos/nightv.png", alt: "NightV", href: "" },
// ];

import { useEffect, useState } from 'react';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { config } from "@/config";
import DiscordProfileApi from "@/api/discordProfile.ts";
import SpotifyApi from "@/api/spotify.ts";
import useSpotifyService from "@/services/spotify.ts";

import type { ProfileData } from "@/types/discordProfile";
import type { CurrentSong, LastSong } from "@/types/spotifyData";

function App() {
   const DiscordProfile = DiscordProfileApi() as { data: ProfileData, loading: boolean, error: boolean };
   const [token, setToken] = useState<string | null>(null);
   const SpotifyData = useSpotifyService(token as string) as { data: CurrentSong | LastSong, error: boolean, loading: boolean };

   useEffect(() => {
      const fetchSpotify = async () => {
         const data = await SpotifyApi();
         setToken(data.access_token);
      };
      fetchSpotify();
   }, []);

   if (DiscordProfile.loading || DiscordProfile.error || SpotifyData.loading || SpotifyData.error) {
      return <></>;
   };

   const profileData = DiscordProfile.data as ProfileData;
   const currentSong = SpotifyData.data as CurrentSong;
   let lastSong: LastSong | undefined;

   if (!currentSong || !currentSong.item) {
      if ('items' in SpotifyData.data) {
         const recentData = SpotifyData.data as { items: Array<{ track: LastSong }> };
         if (recentData.items && recentData.items.length > 0) {
            lastSong = recentData.items[0].track;
         }
      }
   }

   const isCurrentSong = (song: CurrentSong | LastSong): song is CurrentSong => {
      return (song as CurrentSong).is_playing !== undefined && (song as CurrentSong).item !== undefined;
   };

   // const progressPercentage = () => {
   //    if (currentSong && currentSong.item) {
   //       return Math.min((currentSong.progress_ms / currentSong.item.duration_ms) * 100, 100);
   //    }
   //    return 0;
   // };

   return (
      <>
         <div className="flex h-fit min-h-screen flex-col gap-y-6 font-sans">
            <Navbar />
            <main className="grow">
               <div className="mx-auto flex grow flex-col gap-y-6 px-4 max-w-3xl">
                  <section>
                     <div className="rounded-lg border">
                        <div className="flex items-center gap-x-4 p-6 space-y-1.5">
                           <div className="w-[56px] h-[56px] relative">
                              <img src={profileData?.discord_user?.avatar ? `https://cdn.discordapp.com/avatars/${config.discord.id}/${profileData?.discord_user?.avatar}.${profileData?.discord_user?.avatar.startsWith("a_") ? "gif" : "png"}` : 'https://r2.fivemanage.com/PRMGg8LOew8Wiszjkbwm3/images.png'} loading="lazy" alt="vezironi" className="w-full h-full rounded-lg" draggable={false} />
                              <div className={`absolute -bottom-[4px] -right-[4px] w-3.5 h-3.5 rounded-full outline-2 outline-solid outline-background ${profileData?.discord_status === 'online' ? "bg-green-500" : profileData?.discord_status === 'idle' ? "bg-yellow-500" : profileData?.discord_status === 'dnd' ? "bg-red-500" : "bg-gray-500"}`}></div>
                           </div>
                           <div className="flex flex-col">
                              <h3 className="text-3xl leading-none font-medium">No.1</h3>
                              <p className="text-muted-foreground text-sm">vezironi • <span className="font-medium">Web and Game Developer</span></p>
                           </div>
                        </div>
                        <div className="p-6 pt-0">
                           <p className="text-muted-foreground text-sm">Hello, <span className="text-foreground">I'm no.1</span>. I'm <span className="text-foreground">19 years old</span> and <span className="text-foreground">live in Ankara, Turkey</span>. I'm currently focusing on <span className="text-foreground">web and game development</span>. I particularly enjoy developing software using technologies such as <span className="text-foreground">Lua</span>, <span className="text-foreground">Vue</span>, <span className="text-foreground">React</span>, <span className="text-foreground">TypeScript</span>, <span className="text-foreground">SQL</span>... I'm always open to learning new things and aim to add value both to myself and others through the projects I develop.</p>
                        </div>
                     </div>
                  </section>
                  <div className="flex flex-col gap-y-4">
                     <h2 className="text-2xl font-medium">Spotify</h2>
                     <div className="hover:bg-secondary/50 rounded-xl border p-4 transition-colors duration-300 ease-in-out">
                        {
                           isCurrentSong(currentSong) ? (
                              <p>Text</p>
                           ) : (
                              <div className='transition-colors duration-300 ease-in-out flex flex-col gap-4 sm:flex-row'>
                                 <div className='w-full sm:max-w-24 sm:shrink-0'>
                                    <img src={`${lastSong?.album.images[0].url}`} alt="spotify-song-image" width={96} height={96} loading='lazy' decoding='async' className='min-w-24 min-h-24 w-24 h-24 max-w-24 max-h-24 rounded-md' draggable={false} />
                                 </div>
                                 <div className='grow'>
                                    <a href={lastSong?.external_urls.spotify} target="_blank" className="text-foreground hover:underline transition-colors duration-300 ease-in-out mb-1 text-lg font-medium">{lastSong?.name}</a>
                                    <p className="text-muted-foreground text-sm">{lastSong?.artists.map(artist => artist.name).join(', ')}</p>
                                    <div className='flex flex-col items-center'>
                                       <div className='flex items-center justify-between w-full mb-1'>
                                          <p className='text-muted-foreground text-sm'>00:00</p>
                                          <p className='text-muted-foreground text-sm'>00:00</p>
                                       </div>
                                       <div className="w-full h-1.5 bg-[hsl(var(--bg-secondary))] rounded-full relative">
                                          <div className="absolute top-0 left-0 h-full bg-green-700 rounded-full transition-all duration-300" style={{ width: `0%` }}></div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           )
                        }
                     </div>
                  </div>
               </div>
            </main>
            <Footer />
         </div>
      </>
   )
}

export default App

{/* <div className='flex flex-col relative'>
<Navbar />
<div className='container mx-auto h-[85vh] flex flex-col items-center justify-center px-3.5 relative z-[100]'>
   <div className='w-max h-max px-4 py-2 rounded-full border border-solid border-[hsl(var(--border-primary))] bg-[hsl(var(--bg-card))] flex items-center gap-x-2 mb-5'>
      <div className='w-2.5 h-2.5 relative'>
         <div className='w-2.5 h-2.5 rounded-full bg-green-500 relative z-[2]'></div>
         <div className='w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute top-0 left-0 z-[1]'></div>
      </div>
      <ShinyText text="Software Developer" disabled={false} speed={3} className='text-sm text-[hsl(var(--text-muted-foreground))]' />
   </div>
   <p className='text-4xl font-medium max-w-[680px] text-center'>Whereas disregard and contempt for human rights have resulted</p>
   <p className='text-sm font-medium text-[hsl(var(--text-muted-foreground))] max-w-[500px] text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet iste natus quas corrupti architecto.</p>
   <div className='w-[500px] mt-6'>
      <LogoLoop
         logos={imageLogos}
         speed={30}
         direction="left"
         logoHeight={48}
         gap={50}
         pauseOnHover
         scaleOnHover
         fadeOut
         fadeOutColor="#0d0c0d"
         ariaLabel="Companies"
      />
   </div>
</div>
</div> */}