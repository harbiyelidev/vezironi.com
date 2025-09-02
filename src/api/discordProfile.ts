'use client';
import useSWR from 'swr';
import { config } from '../config/index';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DiscordProfile() {
   const url = `https://api.lanyard.rest/v1/users/${config.discord.id}`;

   const { data, error } = useSWR(url, fetcher, {
      refreshInterval: 1000 * 60,
      revalidateOnFocus: true,
   });

   return {
      data: data?.data,
      loading: !error && !data,
      error: error,
   };
}