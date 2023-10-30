import  JWT from "jsonwebtoken";
import dotenv from 'dotenv'
import userModel from "../models/userModel.js";
dotenv.config();

 export const requireSignIn=async(req,res,next)=>{
    try {
    const decode=JWT.verify(req.headers.token,process.env.SERET_KEY);
    req.user=decode;
   
      next();
    } catch (error) {
        return res.status(500).send({
            success:false,
            massage:"internal server error"
        })
    }
 
 }

