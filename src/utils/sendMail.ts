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
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_EMAIL_PASSWORD,
        },
    });


    let info = await transporter.sendMail({
        from: `"info trinity 👻" <${process.env.ADMIN_EMAIL}>`,
        to: `${process.env.ADMIN_EMAIL}`,
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

    // follow up message to sender
    let sender = await transporter.sendMail({
        from: `"info trinity 👻" <${process.env.ADMIN_EMAIL}>`,
        to: contact.email,
        subject: "Cleverbench ContactUs",
        text: contact.details,
        html: `<h4>Hi, ${contact.name}</h4>
                <p>Cleverbench has recieved your email we would get in touch with you soon
                <p>Can you please reply this email with your project details and requirements</p>
                </p>`,
    });

    console.log("Info Message sent: %s", info.messageId);
    console.log("Sender Message sent: %s", sender.messageId);

}

export default SendMail;