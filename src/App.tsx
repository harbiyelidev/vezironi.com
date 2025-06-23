// API
import DiscordProfile from './api/discordProfile.ts'
import SpotifyAPI from './api/spotify.ts';

// Components
import Loading from './components/loading/index.tsx';
import Profile from './components/profile/index.tsx';
import Experience from './components/experience/index.tsx';
import Spotify from './components/spotify/index.tsx';
import Activity from './components/activity/index.tsx';

import { useEffect, useState } from 'react';

const App = () => {
    const { profileData, profileLoading, profileError } = DiscordProfile();
    const [spotifyData, setSpotifyData] = useState<{ access_token?: string; status?: number }>({});
    const [spotifyLoading, setSpotifyLoading] = useState(true);

    useEffect(() => {

        const fetchSpotify = async () => {
            const data = await SpotifyAPI();
            setSpotifyData(data);
            setSpotifyLoading(false);
        };
        fetchSpotify();

    }, []);

    return <Loading />;

    if (spotifyLoading) {
        return <Loading />;
    };

    if (profileError && spotifyData.status !== 200) {
        return <div>Error loading profile data</div>;
    };

    if (profileLoading) {
        return <Loading />;
    };

    if (profileError) {
        return <div>Error loading profile data</div>;
    };

    return (
        <>
            <div className="relative overflow-hidden">
                <div className='flex items-center justify-center p-4'>
                    <div className='flex w-full justify-center gap-4 max-2xl:flex-wrap max-md:w-full'>
                        <div className='grid gap-4 grid-cols-1 h-fit'></div>
                        <div className='grid gap-4 grid-cols-1 h-fit max-md:w-full 2xl:h-fit'>
                            <Profile profile={profileData} />
                            <Experience />
                            <Spotify token={spotifyData.access_token ?? null} />
                            <Activity profile={profileData} />
                        </div>
                        <div className='grid gap-4 grid-cols-1 h-fit max-w-[65vh]'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App