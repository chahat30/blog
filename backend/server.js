import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import path from "path";
import { errorResponseHandler, invalidPathHandler } from "./middleware/errorHandler";

//Routes
import userRoutes from "./routes/userRoutes";

dotenv.config();
connectDB();
const app=express(); //instance of express package
app.use(express.json()); //middleware wherein if frontend sends .json, it will be able to parse it

app.get('/',(req,res)=>{
    res.send("Server is running... ");
})
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
})
app.use('/api/users',userRoutes);

//static assets
app.use('/uploads',express.static(path.join(__dirname,"/uploads")));

app.use(invalidPathHandler);
app.use(errorResponseHandler);

const PORT=process.env.PORT || 5001;

app.listen(PORT,()=> console.log(`server is running on port ${PORT}`));