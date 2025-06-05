'use client';
import axios from "axios";

export default async function SpotifyAPI() {
  try {
    const response = await axios.get('https://api.vezironi.com/refresh', {
      withCredentials: true,
    });

    console.log('Response from refresh:', response.data);

    if (!response.data || !response.data.access_token) {
      const response = await axios.get('https://api.vezironi.com/login', {
        withCredentials: true,
      });

      console.log('Response from login:', response.data);

      if (!response.data || !response.data.access_token) {
        console.error('No access token found in response');
        return null;
      }

      return response.data.access_token;
    }

    return response.data.access_token;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return null;
  }
}