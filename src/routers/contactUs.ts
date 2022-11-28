import ContactUs from '../models/contactUs';
import SendMail from '../utils/sendMail';
import { Router } from 'express';


const router = Router();

router.get('/', async (_req, res) => {
    const contacts = await ContactUs.find()
    res.json({ data: contacts });
})

router.post('/', async (req, res) => {
    const contact = await ContactUs.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        subject: req.body.subject,
        details: req.body.details
    })
    SendMail(contact)
    res.json({ data: contact })
})

export default router;