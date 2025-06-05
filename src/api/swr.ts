'use client';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SWR(type: string) {
  let url = '';

  if (type === 'discord') {
    url = `https://api.lanyard.rest/v1/users/${import.meta.env.VITE_PROFILE_ID}`;
  } else if (type === 'github') {
    url = `https://api.github.com/users/${import.meta.env.VITE_GITHUB_USERNAME}/repos?per_page=100&sort=updated`;
  }

  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: true,
  });

  return {
    data: type === 'discord' ? data?.data : data,
    isLoading: !error && !data,
    isError: error,
  };
}