import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { User } from "../models/users.js";


export const protect=asyncHandler(async(req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    try{
        //Get token from header
        token=req.headers.authorization.split(' ')[1];

        //verify token
        const decoded=jwt.verify(token,process.env.JWT_SECRET);

        //get user id
        req.user=await User.findById(decoded.id).select('-password');

        next();

    }
    catch(error){
        console.log(error)
        res.status(401)
        throw new Error('Not Authorized');
    }
}
else{
    res.status(401)
    throw new Error('Not Authorized..No token found');
}
})