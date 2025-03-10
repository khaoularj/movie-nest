import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend('re_5qwxzC4F_J1tK2nCsVDN1xTdemzfuD7H3');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, subject, email, message } = req.body;

    // to check if all required fields are filled
    if (!name || !subject || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const emailContent = {
        from: "onboarding@resend.dev",
        to: "khaoula.raja1@gmail.com",
        subject: `Contact Form in MovieNest: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
        await resend.emails.send(emailContent);
        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
    }
}