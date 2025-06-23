import useSWR from "swr";
import { useState, useMemo } from "react";

export default function useSpotifyService(token: string) {
    const currentSongURL = 'https://api.spotify.com/v1/me/player/currently-playing';
    const recentlySongURL = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const fetcher = async () => {
        if (!token) throw new Error("Missing token");

        const currentRes = await fetch(currentSongURL, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (currentRes.status === 204 || currentRes.status === 202 || currentRes.status === 200 && (await currentRes.clone().text()) === "") {
            setIsPlaying(false);

            const recentRes = await fetch(recentlySongURL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!recentRes.ok) throw new Error("Failed to fetch recent song");
            const recentData = await recentRes.json();
            return { ...recentData, is_playing: false };
        }

        if (!currentRes.ok) throw new Error("Failed to fetch current song");

        const currentData = await currentRes.json();
        setIsPlaying(true);
        return { ...currentData };
    };

    const refreshInterval = useMemo(() => isPlaying ? 1000 : 5 * 60 * 1000, [isPlaying]);

    const { data, error, isLoading } = useSWR(token ? 'spotifyData' : null, fetcher, {
        refreshInterval,
        revalidateOnFocus: false,
    });

    return { data, error, isLoading };
}
