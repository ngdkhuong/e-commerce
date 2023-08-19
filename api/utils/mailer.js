import createMailTransporter from './createMailTransporter.js';

const mailer = (user, token) => {
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.MAIL_FROM_ADDRESS,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"Nice Shop ✔" <${process.env.MAIL_FROM_ADDRESS}>`,
        to: user,
        subject: 'Verify your mail ...',
        html: `
            <p>Hello ${user}, verify your email by clicking this link...</p>
            <a href='${process.env.CLIENT_URL}/verify-email?emailToken=${token}'>Verify your Email</a>
        `,
        text: `http://localhost:5173/reset-password/${user}/${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

export default mailer;

// ! gửi verify cho người dùng xác minh
