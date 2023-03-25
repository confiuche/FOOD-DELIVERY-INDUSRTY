

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