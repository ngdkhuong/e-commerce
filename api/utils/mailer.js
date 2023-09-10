import nodemailer from 'nodemailer';
import crypto from 'crypto';

export const mailer = async (email, token) => {
    const transporter = await nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 465, // SMTP over SSL
        secureConnection: true, // use TLS
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const resetLink = `http://localhost:5173/reset-password/${token}`;

    const mailOptions = {
        to: email,
        subject: 'Password Reset Request',
        text: `Click the following link to reset your password: ${resetLink}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending reset email');
        } else {
            console.log('Reset email sent: ' + info.response);
            res.status(200).send('Email sent with reset instructions.');
        }
    });
};
