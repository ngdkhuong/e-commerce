import {createMailTransporter} from ("./createMailTransporter")

const sendVerificationMail = (user) => {
    const transporter = createMailTransporter();

    const mailOptions = {
        from: '"Nice Shop" <ryannguyen450@gmail.com>',
        to: user.email,
    }
}

module.exports = {sendVerificationMail}