import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
    const { firstName, lastName, email, phone, message, company } = JSON.parse(event.body || "{}");

    // 🚨 If honeypot is filled → it's spam
    if (company) {
        return {
            statusCode: 200,
            body: "OK",
        };
    }

    if (!firstName || !lastName || !email) {
        return {
            statusCode: 400,
            body: "Missing fields",
        };
    }
    

    try {
        await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                from: "you@yourdomain.com",
                to: "you@yourdomain.com",
                subject: "New Contact Submission",
                html: `
                    <p>Name: ${firstName} ${lastName}</p>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone}</p>
                    <p>Message: ${message || ""}</p>
                `,
            }),
        });

        return {
            statusCode: 200,
            body: "Email sent",
        };
    } catch {
        return {
            statusCode: 500,
            body: "Error sending email",
        };
    }
};