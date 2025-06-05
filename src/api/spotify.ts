'use client';
import axios from "axios";

export default async function SpotifyAPI() {
  const expires_in = localStorage.getItem('expires_in');
  const currentTime = Date.now();

  if (expires_in && currentTime < parseInt(expires_in)) {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      return access_token;
    }
  }

  try {
    const response = await axios.get('https://api.vezironi.com/v1/refresh', {});

    if (response.status == 200) {
      const { access_token, expires_in } = response.data;

      localStorage.setItem('access_token', access_token);
      localStorage.setItem('expires_in', (Date.now() + expires_in * 1000).toString());

      return response.data;
    };

    return response.data;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
}