import mongoose from "mongoose";


export const connectDB= async (URI)=>{
    try{
        const conn=await mongoose.connect(URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}