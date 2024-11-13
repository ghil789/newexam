import User from "../models/user.model.js";


export const signup = async (req,res) => {
    const {username, email, password} = req.body;

    if (!username || !email || !password || username ==='' ||email === '' || password === '') {
        return res.status(400).json({message:'all fields are requiered'});

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
        res.status(500).json({message:error.message});

    }

    
};