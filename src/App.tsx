import { useEffect, useState } from 'react';
import SpotifyAPI from '@/api/spotify';
import SWR from '@/api/swr';

import Profile from './components/profile';
import Experience from './components/experience';
import Activity from './components/activity';

import type { ProfileData } from '@/types/profileType';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const data = await SpotifyAPI();

      if (data.status === 200) {
        const { access_token } = data;

        setToken(access_token);
      } else {
        console.error('Failed to fetch access token:', data);
      }
    };
    fetchToken();
  }, []);

  const { data, isError, isLoading } = SWR('discord');

  const discordUser: ProfileData | null = data ? data : null;

  if (isLoading) return <p className='text-center text-gray-400'>Loading...</p>;
  if (isError) return <p className='text-center text-red-500'>An error occurred while fetching the profile data.</p>;

  return (
    <div className="relative overflow-hidden">
      <div className='flex items-center justify-center p-4'>
        <div className='flex w-full justify-center gap-4 max-2xl:flex-wrap max-md:w-full'>
          <div className='grid gap-4 grid-cols-1 h-fit'></div>
          <div className='grid gap-4 grid-cols-1 h-fit max-md:w-full 2xl:h-fit'>
            <Profile profile={discordUser} />
            <Experience />
            <Activity access_token={token} />
          </div>
          <div className='grid gap-4 grid-cols-1 h-fit max-w-[65vh]'></div>
        </div>
      </div>
    </div>
  )
}

export default App
