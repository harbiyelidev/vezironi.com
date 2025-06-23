'use client';
import useSWR from 'swr';
import { config } from '../config';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function useScriptVersions() {
  const URL = `${config.apiUrl}/fivem/versions`;

  const { data, error } = useSWR(URL, fetcher, {
    refreshInterval: 0,
    revalidateOnFocus: false,
  });

  return {
    versionsData: data,
    versionsLoading: !error && !data,
    versionsError: error,
  };
}
