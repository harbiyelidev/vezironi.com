import useSWR from 'swr';

export const useLastSong = (access_token: string | null) => {
  const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

  const fetcher = async (url: string) => {
    if (!access_token) throw new Error("Missing token");

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  };

  const { data, error } = useSWR(
    access_token ? url : null,
    fetcher,
    {
      refreshInterval: 1000 * 60 * 5,
      revalidateOnFocus: true,
      shouldRetryOnError: false,
    }
  );

  return {
    lastData: data,
    isLoading: !error && !data && !!access_token,
    isError: error,
  };
};