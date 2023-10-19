import express from 'express'
import cors from 'cors'
import dbConnect from './config/db.js'
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js';
dotenv.config();
dbConnect();
const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter)
const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})