import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userControllers from "./controllers/userControllers.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { body } from 'express-validator'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))

app.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 8, max: 32 }),
    body('fullName').isLength({min:4 , max:24}),
    userControllers.registration
)
app.post('/login',userControllers.login)
app.post('/logout',userControllers.logout)
app.post('/savemovies',userControllers.saveMovie)
app.post('/cancelSaveMovie' , userControllers.cancelSaveMovie)
app.get('/refresh',userControllers.refresh)


app.use(errorMiddleware)


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_API)
        app.listen(process.env.PORT, () => {
            console.log('app runed on port', process.env.PORT);
        })
    } catch (error) {
        console.log(error)
    }
}

start()