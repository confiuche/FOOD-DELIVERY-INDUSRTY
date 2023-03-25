import express from 'express'
import { createUserController, deleteUserController, displayAllController, updateUserController } from '../Controller/userController.js';



const userRoutes = express.Router();

//create user
userRoutes.post("/create", createUserController);

//display profile
userRoutes.get("", displayAllController);

//update user account
userRoutes.put("/:id", updateUserController);

//delete user account
userRoutes.delete("/:id", deleteUserController)



export default userRoutes;