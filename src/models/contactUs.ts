import mongoose from 'mongoose';
import { IContactUs } from '../types';

const ContactUsSchema = new mongoose.Schema<IContactUs>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    subject: {
        type: String
    },
    details: {
        type: String,
        required: true
    }
})

const ContactUs = mongoose.model('ContactUs', ContactUsSchema)

export default ContactUs