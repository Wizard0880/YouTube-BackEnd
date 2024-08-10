import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))
app.use(express.static("public")) //help to make a public folder so that anyone can access it (static data : favicon ,pdf , images etc)
app.use(cookieParser()) // help in accessing the cookies of user's browser from server and also set them (basically CRUD operation).


 


export { app }