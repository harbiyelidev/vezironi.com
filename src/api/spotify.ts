'use client';
import axios from "axios";

export default async function SpotifyAPI() {
  const expiredTime = localStorage.getItem('expiredTime');
  const currentTime = Date.now();

  if (expiredTime && currentTime < parseInt(expiredTime)) {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      return accessToken;
    }
  }

  try {
    const response = await axios.get('https://api.vezironi.com/v1/refresh', {});

    if (response.status == 200) {
      const { access_token, expire_in } = response.data;

      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('expiredTime', (Date.now() + expire_in * 1000).toString());

      return response.data;
    };

    return response.data;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
}