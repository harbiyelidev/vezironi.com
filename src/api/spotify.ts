'use client';
import axios from "axios";
import { config } from "../config";

export default async function SpotifyAPI() {
    const URL = `${config.apiUrl}/refresh`;

    const expiresIn = localStorage.getItem("spotify_expires_in");
    const currentTime = Date.now();

    if (expiresIn && currentTime < parseInt(expiresIn)) {
        const accessToken = localStorage.getItem("spotify_access_token");
        return {
            status: 200,
            access_token: accessToken,
        };
    }

    try {
        const response = await axios.get(URL, {});

        if (response.status == 200) {
            const { access_token, expires_in } = response.data;

            localStorage.setItem('spotify_access_token', access_token);
            localStorage.setItem('spotify_expires_in', (Date.now() + expires_in * 1000).toString());

            return response.data;
        };

        return {
            status: response.status,
            message: response.data.message || 'Failed to refresh token',
        };
    } catch (error) {
        console.error('Token refresh failed:', error);
        return {
            status: 404,
            message: 'Token refresh failed. Please try again later.',
        };
    }
};