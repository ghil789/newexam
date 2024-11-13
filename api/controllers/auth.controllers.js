import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";


export const signup = async (req,res,next) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password || username ==='' ||email === '' || password === '') {
        next(errorHandler(400,'all fields are required'));

    }
    
    const newUser = new User({
        username:username,
        email:email,
        password:password,
    });

    try {
        await newUser.save();
        res.json('signup successful');
    } catch (error) {
        next(error);

    }

    
};