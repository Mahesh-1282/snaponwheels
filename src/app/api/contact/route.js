import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Configure the transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Resolve logo path for attachment
        const logoPath = path.join(process.cwd(), 'public', 'images', 'SnaponWheelsLogo.png');
        const logoContent = fs.readFileSync(logoPath);

        // 1. Mail to Admin (Owner)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL, // Updated to use env var
            subject: `New Inquiry from ${name} - SnapOnWheels`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; color: #555;">
                ${message}
            </div>
        </div>
      `,
        };

        // 2. Mail to User (Confirmation)
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for choosing SnapOnWheels!',
            attachments: [{
                filename: 'SnaponWheelsLogo.png',
                content: logoContent,
                cid: 'logo' // same cid value as in the html img src
            }],
            html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
            
            <div style="background-color: #ffffff; padding: 30px; text-align: center; border-bottom: 3px solid #00f3ff;">
                <img src="cid:logo" alt="SnapOnWheels" style="max-height: 80px; width: auto;" />
            </div>

            <div style="padding: 40px 30px; background-color: #fafafa;">
                <h2 style="color: #333; margin-top: 0;">Hello ${name},</h2>
                <p style="font-size: 16px; line-height: 1.6; color: #555;">
                    Thanks for contacting <strong>SnapOnWheels</strong>! We have received your inquiry.
                </p>
                <p style="font-size: 16px; line-height: 1.6; color: #555;">
                    Our team is reviewing your details and will get back to you shortly to discuss your event.
                </p>
                
                <div style="margin-top: 30px; padding: 20px; background-color: #ffffff; border-radius: 8px; border: 1px solid #eaeaea;">
                    <p style="margin: 0 0 10px 0; font-weight: bold; color: #333;">Our Contact Details:</p>
                    <p style="margin: 5px 0; font-size: 15px; color: #666;">📞 +91 88856 66478</p>
                    <p style="margin: 5px 0; font-size: 15px; color: #666;">✉️ snaponwheel@gmail.com</p>
                </div>
            </div>

            <div style="background-color: #333; padding: 20px; text-align: center; color: #888; font-size: 12px;">
                <p>© ${new Date().getFullYear()} SnapOnWheels. All rights reserved.</p>
                <p>Capture. Showoff. Share.</p>
            </div>
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
