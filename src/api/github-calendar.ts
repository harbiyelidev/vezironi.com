import useSWR from 'swr';

export default async function GithubCalendar() {
    const url = 'https://github-contributions-api.jogruber.de/v4/harbiyelidev?y=last';

    const fetcher = async (url: string) => {
        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
    };

    const { data, error } = useSWR(
        url,
        fetcher,
        {
            refreshInterval: 1000 * 60 * 60,
            revalidateOnFocus: true,
            shouldRetryOnError: false,
        }
    );

    return {
        githubCLData: data,
        isCalendarLoading: !error && !data,
        isError: error,
    };
}
