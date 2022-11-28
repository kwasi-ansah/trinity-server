import nodemailer from 'nodemailer';
import { IContactUs } from '../types';
import 'dotenv/config';


const SendMail = async (contact: IContactUs) => {

    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });


    let info = await transporter.sendMail({
        from: `"info trinity 👻" <${process.env.INFO_EMAIL}>`,
        to: "trinityy041@gmail.com",
        subject: contact.subject,
        text: contact.details,
        html: `<h4>Hi, Trinity</h4>
                <span style="margin-bottom: 1.5em; display: block"></span>
                <p>${contact.details}</p>
                <p>Thanks!</p>
                <span style="margin-bottom: 2em; display: block"></span>
                <p>${contact.name}</p>
                <p>${contact.email}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}

export default SendMail;