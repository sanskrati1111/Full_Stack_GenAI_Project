const userModel=require('../models/user.model');

/**
 * @name registerUserController 
 * @description register a new user, expects name, email and password in the request body
 * @access Public
*/


async function registerUserController(req,res){
    const {username,email,password}=req.body;

    if(!username || !email || !password){

        return res.status(400).json({message:"All fields are required"});
    }
    const isUserExist=await userModel.findOne({
        $or:[ {username}
        ,{email}]
    });
    if(isUserExist){
        // if useralready exists
        return res.status(400).json({message:"User already exists"});
    }

}

module.exports={registerUserController}