import express from 'express'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

const start = () =>{
    try {
        app.listen(process.env.PORT ,()=>{
            console.log('app runed on port',process.env.PORT);
        })
    } catch (error) {
        console.log(error)
    }
}

start()