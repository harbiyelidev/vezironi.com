// API
import DiscordProfile from '@/api/discordProfile.ts'
import SpotifyAPI from '@/api/spotify.ts';
import ScriptVersionsAPI from '@/api/scriptVersions.ts';

// Components
import Loading from '@/components/loading';
import Profile from './components/profile';
import Experience from './components/experience';
import Spotify from './components/spotify';
import Activity from './components/activity';
import Versions from './components/versions';
import Technologies from './components/technologies';
import BlogList from './components/blog';

import { useEffect, useState } from 'react';

const Home = () => {
    const { profileData, profileLoading, profileError } = DiscordProfile();
    const [spotifyData, setSpotifyData] = useState<{ access_token?: string; status?: number }>({});
    const [spotifyLoading, setSpotifyLoading] = useState(true);
    const { versionsData, versionsLoading, versionsError } = ScriptVersionsAPI();

    useEffect(() => {

        const fetchSpotify = async () => {
            const data = await SpotifyAPI();
            setSpotifyData(data);
            setSpotifyLoading(false);
        };
        fetchSpotify();

    }, []);

    if (profileLoading || spotifyLoading || profileError || spotifyData.status !== 200 || !spotifyData.access_token || versionsLoading || versionsError) {
        return <Loading />;
    };

    return (
        <>
            <div className="relative overflow-hidden">
                <div className='flex items-center justify-center p-4'>
                    <div className='flex w-full justify-center gap-4 max-2xl:flex-wrap max-md:w-full'>
                        <div className='grid gap-4 grid-cols-1 h-fit max-w-[65vh]'>
                            <Technologies />
                        </div>
                        <div className='grid gap-4 grid-cols-1 h-fit max-md:w-full 2xl:h-fit'>
                            <Profile profile={profileData} />
                            <Experience />
                            <Spotify token={spotifyData.access_token ?? null} />
                            <Activity profile={profileData} />
                        </div>
                        <div className='grid gap-4 grid-cols-1 h-fit max-w-[65vh]'>
                            <Versions data={versionsData.versions} />
                            <BlogList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;