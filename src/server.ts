import bodyParser from 'body-parser';
import ContactUsRouter from './routers/contactUs';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';


const db_connection = process.env.DB_CONNECTION || ""
const db = mongoose.connect(db_connection, (err) => {
    if (err) {
        throw (err);
    }
    console.log('💿Database connection established')
})

const app = express();
const port = process.env.SERVER_PORT || process.env.PORT

const startServer = () => {
    app.use(cors());
    app.use(bodyParser.json());
    app.get('/', (_, res) => {
        res.send({ message: "It worked" })
    })
    app.use('/contact-us', ContactUsRouter);
    app.listen(port, () => {
        console.log(`🚀Server started on port ${port}`);
    })
}

startServer()