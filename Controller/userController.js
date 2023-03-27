import User from "../Model/userModel.js";

//create users
export const createUserController = async(req,res)=>{
    try {
        res.json({
            status:"success",
            message:"User account successfully created",
        })
    } catch (error) {
        res.json(error.message);
    }
}


//display all user
export const displayAllController = async(req,res)=>{
    try {
        res.json({
            status:"success",
            message:"Display all profile",
        })
    } catch (error) {
        res.json(error.message);
    }
}


//user update
export const updateUserController = async(req,res)=>{
    const userid = req.params.id;
    try {
        res.json({
            status:"success",
            message:"Account Updated Successfully "+userid,
        })
    } catch (error) {
        res.json(error.message);
    }
}


//delete user
export const deleteUserController = async(req,res)=>{
    const userid = req.params.id;
    try {
        res.json({
            status:"success",
            message:"Account Deleted Successfully",
        })
    } catch (error) {
        res.json(error.message);
    }
}