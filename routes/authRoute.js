import express  from "express";
import { loginController, registerController } from "../controllers/authcontrollers.js";



// router object
const router=express.Router();

// routing 
// ---------------------------Register Routes || methode Post || No Login Required-------------------
router.post('/register',registerController);
// login route
router.post('/login',loginController)


export default router;
