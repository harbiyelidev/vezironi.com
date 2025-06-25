'use client';
import axios from "axios";
import { config } from "../config";

export default async function SendMail() {
    const URL = `${config.apiUrl}/sendmail`;

    try {
        const response = await axios.post(URL, {
            name: 'vezironi',
            email: 'vezironi@icloud.com',
            message: 'sa',
        });

        return response.data;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};