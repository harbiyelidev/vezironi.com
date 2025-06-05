'use client';
import axios from "axios";

export default async function SpotifyAPI() {
  try {
    const response = await axios.get('https://api.vezironi.com/api/refresh', {});

    console.log('Token refreshed successfully:', response.data);

    return response.data.access_token;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
}