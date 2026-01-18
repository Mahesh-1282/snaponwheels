import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Configure the transporter with your credentials
        // User needs to provide EMAIL_USER and EMAIL_PASS in .env.local
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or your SMTP provider
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 1. Mail to Admin (Owner)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Inquiry from ${name} - SnapOnWheels`,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        // 2. Mail to User (Confirmation)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting SnapOnWheels!',
            html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #00f3ff;">Hello ${name},</h2>
          <p>Thanks for reaching out to <strong>SnapOnWheels</strong>!</p>
          <p>We have received your inquiry and our team will get back to you shortly.</p>
          <br>
          <p>Best Regards,</p>
          <p><strong>The SnapOnWheels Team</strong></p>
          <p><em>Capture. Showoff. Share.</em></p>
        </div>
      `,
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        return NextResponse.json({ success: true, message: 'Emails sent successfully!' });
    } catch (error) {
        console.error('Email Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
    }
}
