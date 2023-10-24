import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();
connectDB();
const app=express(); //instance of express package
app.use(express.json()); //middleware wherein if frontend sends .json, it will be able to parse it

app.get('/',(req,res)=>{
    res.send("Server is running... ");
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));