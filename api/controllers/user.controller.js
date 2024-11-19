import express from "express";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";

export const test = (req,res) =>{
    res.json({message:'API is working'});
};

export const updateUser= async (req,res, next) =>{
if (req.user.id !== res.params.userId){
    return next(errorHandler(403,'you are not allowed to update this user'));

}
if (req.body.password){
    if(req.body.password.length < 6){
        return next(errorHandler(400,'password must be at least 6 characters'));
    }
    req.body.password=req.body.password;
}
if (req.body.username){
    if(req.body.username.length < 4 || req.body.username.length > 10){
        return next(errorHandler(400,'username must be between 4 and 10 characters'));
    }
    if (req.body.username.includes(' ')){
        return next(errorHandler(400,'user can not contain spaces'));
    }
};


    try{
        const updateUser = await User.findByIdAndUpdate(
            req.params.userId,{
                $set:{
                    username:req.body.username,
                    email:req.body.email,
                    profilePicture:req.body.profilePicture,
                    password:req.body.password,
                },
            },{new: true}
        );
        const {password, ...rest} = updateUser._doc;
        res.status(200).json(rest);
    } catch(error){
        next(error);
    }


}; 