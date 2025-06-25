'use client';
import axios from "axios";
// import { config } from "../config";

export default async function SendMail() {
    // const URL = `${config.apiUrl}/sendmail`;

    try {
        await axios.post('https://api.vezironi.com/v1/sendmail', {
            name: "Vezironi",
            email: "vezironi@icloud.com",
            message: "sa"
        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};