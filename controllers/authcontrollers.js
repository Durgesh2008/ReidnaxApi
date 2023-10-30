import { comparePassword, hashedPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
// Regiter controllers-----------------------------------------------
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    // form validation
    if (name && email && password && phone ) {
      //   check user is not in database
      const existuser = await userModel.findOne({ email });
      if (existuser) {
        return res.status(200).send({
          success: true,
          message: "User already Register please Login",
        });
      }

      // hased password
      const encrptpassword = await hashedPassword(password);

    //   create new user in database
      const user =await new userModel({
        name,
        email,
        phone,
        password: encrptpassword,
      
      }).save();

      return res.status(201).send({
        success: true,
        message: "register successfully",
        user,
      });
      
    } else {
      return res.status(200).send({
        success: false,
        message: "some field is missing",
      });
    }
  } catch (error) {
    console.log("error in registerController");
    res.status(500).send({
      success: false,
      message: "error in registerController",
      error,
    });
  }
};

// Login controllers -----------------------------------------------
export const loginController = async (req, res) => {
    try {
      const {username, password } = req.body;

      // validation
      if (!username || !password) {
        return res.status(200).send({
            success: false,
            message: "some field is missing",
          });   
      } 

      const user=await userModel.findOne({name:username});

      if(!user){
        return res.status(200).send({
            success: false,
            message: "user is not found",
          });  
      }
       //   compare password
       const matchPassword=await comparePassword(password,user.password);
       if(!matchPassword){
        return res.status(200).send({
            success: false,
            message: "wrong credentials",
          });  
        
       }
 
     //   generate token
     const token= JWT.sign({_id:user._id},process.env.SERET_KEY,{expiresIn:"5d",});
   return res.status(200).send({
     success:true,
     message:"Login successfully",
     user:{
         id:user._id,
         name:user.name,
         email:user.email,
         phone:user.phone,
        
        
     },
     token
   })
 
     
    } catch (error) {
      console.log("error in registerController");
      res.status(500).send({
        success: false,
        message: "error in loginController",
        error,
      });
    }
  };
  

 

