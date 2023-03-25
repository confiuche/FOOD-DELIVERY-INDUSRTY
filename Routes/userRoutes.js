import express from 'express'
import { createUserController, displayAllController } from '../Controller/userController.js';



const userRoutes = express.Router();

//create user
userRoutes.post("/create", createUserController);

//display profile
userRoutes.get("", displayAllController);



export default userRoutes;