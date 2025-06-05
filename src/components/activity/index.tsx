'use client';
import { useCurrentSong } from "@/hooks/getCurrentSong";
import { useLastSong } from "@/hooks/getLastSong";
import { useGithubCalendar } from "@/hooks/useGithubCalendar";

import Calendar from "react-activity-calendar";

import type { Token } from "@/types/token";
import type { CurrentSong, LastSong } from "@/types/spotify";

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface ApiResponse {
  total: {
    [year: number]: number
    [year: string]: number
  }
  contributions: Array<Activity>
}

function Activity({ access_token }: Token) {
    const { githubCLData } = useGithubCalendar();
    const { currentData, isLoading } = useCurrentSong(access_token);
    const { lastData } = useLastSong(access_token);

    const calendarData: ApiResponse = githubCLData ? githubCLData : { total: {}, contributions: [] };
    const currentSong: CurrentSong | null = currentData ? currentData : null;
    const lastSong: LastSong | null = lastData ? lastData.items[0].track : null;

    if (!access_token) return <a href="https://api.vezironi.com/v1/login">Please login</a>;
    if (isLoading) return <div>Loading song data...</div>;

    const progressPercentage = () => {
        if (currentSong && currentSong.item) {
            return Math.min((currentSong.progress_ms / currentSong.item.duration_ms) * 100, 100);
        }
        return 0;
    };

    const selectLastNDays = (contributions: Activity[], days: number) => {
        const today = new Date()
        const startDate = new Date(today)
        startDate.setDate(today.getDate() - days)

        return contributions.filter((activity) => {
            const activityDate = new Date(activity.date)
            return activityDate >= startDate && activityDate <= today
        })
    };

    return (
        <div className="grid w-full grid-cols-1 gap-4 max-md:w-full">
            <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md w-full">
                <div className="p-6 pt-0 mt-5 w-full">
                    {
                        currentSong && currentSong.item ? (
                            <div className="flex flex-row items-center w-full">
                                <img src={`${currentSong?.item.album.images[0].url}`} alt="spotify-song-image" width={100} height={100} loading='eager' decoding='async' className='rounded-md' />
                                <div className="ml-4 w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-2xl font-['Geist-Bold'] text-[hsl(var(--text-primary))]">{currentSong?.item.name}</h1>
                                        <div className="rounded-full text-xs font-['Geist-Semibold'] mt-auto flex w-fit items-center justify-center gap-1">
                                            <p className="font-['Geist-Regular']">
                                                {currentSong?.item.artists.map((artist: any, index: number) => (
                                                    <span key={index} className="text-gray-400">
                                                        <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                            {artist.name}
                                                        </a>
                                                        {index < currentSong.item.artists.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-1.5 bg-[hsl(var(--bg-secondary))] rounded-full relative">
                                        <div className="absolute top-0 left-0 h-full bg-[hsl(var(--text-primary))] rounded-full transition-all duration-300" style={{ width: `${progressPercentage()}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div className="flex flex-row items-center w-full">
                                <img src={`${lastSong?.album.images[0].url}`} alt="spotify-song-image" width={100} height={100} loading='eager' decoding='async' className='rounded-md' />
                                <div className="ml-4 w-full">
                                    <div className="flex flex-col">
                                        <h1 className="text-2xl font-['Geist-Bold'] text-[hsl(var(--text-primary))]">{lastSong?.name}</h1>
                                        <div className="rounded-full text-xs font-['Geist-Semibold'] mt-auto flex w-fit items-center justify-center gap-1">
                                            <p className="font-['Geist-Regular']">
                                                {lastSong?.artists.map((artist: any, index: number) => (
                                                    <span key={index} className="text-gray-400">
                                                        <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                            {artist.name}
                                                        </a>
                                                        {index < lastSong.artists.length - 1 ? ', ' : ''}
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full h-1.5 bg-[hsl(var(--bg-secondary))] rounded-full relative">
                                        <div className="absolute top-0 left-0 h-full bg-[hsl(var(--text-primary))] rounded-full transition-all duration-300" style={{ width: `0%` }}></div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md w-full">
                <div className="p-6 pt-0 mt-5 w-full">
                    <div className="text-[hsl(var(--text-foreground))] hidden w-fit sm:block">
                        <Calendar
                            data={selectLastNDays(calendarData.contributions, 0)}
                            theme={{
                                dark: ['#0d0c0d', '#b2a7fb'],
                            }}
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={6}
                            blockRadius={3}
                            maxLevel={4}
                            hideTotalCount
                            hideColorLegend
                            hideMonthLabels
                        />
                    </div>
                    <div className="text-[hsl(var(--text-foreground))] w-fit sm:hidden">
                        <Calendar
                            data={selectLastNDays(calendarData.contributions, 60)}
                            theme={{
                                dark: ['#0d0c0d', '#b2a7fb'],
                            }}
                            colorScheme="dark"
                            blockSize={12}
                            blockMargin={6}
                            blockRadius={3}
                            maxLevel={4}
                            hideTotalCount
                            hideColorLegend
                            hideMonthLabels
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Activity;