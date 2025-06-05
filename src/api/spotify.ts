'use client';
import axios from "axios";

export default async function SpotifyAPI() {
  try {
    const response = await axios.get('http://localhost:3001/api/refresh', {
      withCredentials: true,
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
}