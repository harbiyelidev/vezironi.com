import useSpotifyService from "@/services/spotifyService";

import type { CurrentSong, LastSong, Artist } from "@/models/spotifyData";

function Spotify({ token }: { token: string | null }) {
    if (!token) {
        throw new Error("Token is required for Spotify component");
    }

    const { data, error, isLoading } = useSpotifyService(token);

    console.log(isLoading);

    return <div className="grid w-full grid-cols-1 gap-4 max-md:w-full">
        <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md w-full">
            <div className="p-6 pt-0 mt-5 w-full">
                <div className="flex flex-row items-center w-full">
                    <div className="min-w-24 min-h-24 w-24 h-24 max-w-24 max-h-24 animate-pulse bg-[hsl(var(--bg-secondary))]"></div>
                    <div className="ml-4 w-full">
                        <div className="flex flex-col gap-y-1.5 mb-1">
                            <div className="w-36 h-12 animate-pulse bg-[hsl(var(--bg-secondary))]"></div>
                            <div className="rounded-full mt-auto flex w-fit items-center justify-center gap-1">
                                <div className="w-36 h-5 animate-pulse bg-[hsl(var(--bg-secondary))]"></div>
                            </div>
                        </div>
                        <div className="w-full h-1.5 bg-[hsl(var(--bg-secondary))] rounded-full relative"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>;

    if (error) {
        return <div className="text-center">Error loading song data</div>;
    }

    if (!data) {
        return <div className="text-center">No song data available</div>;
    }

    const currentSong = data as CurrentSong;
    let lastSong: LastSong | undefined;

    if (!currentSong) {
        lastSong = data.items[0].track as LastSong;
    }

    const isCurrentSong = (song: CurrentSong | LastSong): song is CurrentSong => {
        return (song as CurrentSong).is_playing !== undefined && (song as CurrentSong).item !== undefined;
    };

    const progressPercentage = () => {
        if (currentSong && currentSong.item) {
            return Math.min((currentSong.progress_ms / currentSong.item.duration_ms) * 100, 100);
        }
        return 0;
    };

    return (
        <div className="grid w-full grid-cols-1 gap-4 max-md:w-full">
            <div className="rounded-lg border bg-[hsl(var(--bg-card))] text-[hsl(var(--text-foreground))] shadow-md w-full">
                <div className="p-6 pt-0 mt-5 w-full">
                    {
                        isCurrentSong(data) ? (
                            <div className="flex flex-row items-center w-full">
                                <img src={`${currentSong?.item.album.images[0].url}`} alt="spotify-song-image" width={96} height={96} loading='eager' decoding='async' className='min-w-24 min-h-24 w-24 h-24 max-w-24 max-h-24 rounded-md' />
                                <div className="ml-4 w-full">
                                    <div className="flex flex-col mb-1">
                                        <h1 className="text-2xl font-['Geist-Bold'] text-[hsl(var(--text-primary))]">{currentSong?.item.name}</h1>
                                        <div className="rounded-full text-xs font-['Geist-Semibold'] mt-auto flex w-fit items-center justify-center gap-1">
                                            <p className="font-['Geist-Regular']">
                                                {currentSong?.item.artists.map((artist: Artist, index: number) => (
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
                        ) : (
                            <div className="flex flex-row items-center w-full">
                                <img src={`${lastSong?.album.images[0].url}`} alt="spotify-song-image" width={96} height={96} loading='eager' decoding='async' className='min-w-24 min-h-24 w-24 h-24 max-w-24 max-h-24 rounded-md' />
                                <div className="ml-4 w-full">
                                    <div className="flex flex-col mb-1">
                                        <h1 className="text-2xl font-['Geist-Bold'] text-[hsl(var(--text-primary))]">{lastSong?.name}</h1>
                                        <div className="rounded-full text-xs font-['Geist-Semibold'] mt-auto flex w-fit items-center justify-center gap-1">
                                            <p className="font-['Geist-Regular']">
                                                {lastSong?.artists.map((artist: Artist, index: number) => (
                                                    <span key={index} className="text-gray-400">
                                                        <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                            {artist.name}
                                                        </a>
                                                        {lastSong && index < lastSong.artists.length - 1 ? ', ' : ''}
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
        </div>
    );
}

export default Spotify;