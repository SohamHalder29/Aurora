import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.get('/', (req:Request, res:Response)=>{
    res.send("<h1>Soham Express</h1>")
})

app.listen(3000, 'localhost', ()=>{})