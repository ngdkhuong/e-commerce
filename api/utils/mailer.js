import nodemailer from 'nodemailer';

export const mailer = (email, token) => {
    const resetLink = `${process.env.API_URL}/api/auth/reset-password/${token}`;

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 465, // SMTP over SSL
        secureConnection: true, // use TLS
        auth: {
            user: process.env.MAIL_FROM_ADDRESS,
            pass: process.env.MAIL_PASSWORD,
        },
    });

    const mailOptions = {
        to: email,
        subject: 'Password Reset Request',
        html: `Click the following link to reset your password: <a href="${resetLink}">Reset Link</a>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Reset email sent: ' + info.response);
        }
    });
};
