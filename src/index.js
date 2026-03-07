// require('dotenv').config()
import dotenv from "dotenv";
import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);
import connectDB from "./db/db.js";
import express from 'express'


const app = express()

dotenv.config({
    path: "./.env"
});


const listenAt = process.env.PORT || 8000


connectDB()
.then(() => {
    app.listen(listenAt, (req, res) => {
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})

/*
import express from "express";
const app = express()


( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error)
        })

        app.listen(process.env.PORT), () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        }
    } catch (error){
        console.log(error)
        throw error
    }
})()

*/
