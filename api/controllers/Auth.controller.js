import User from "../models/user.model.js";

export const Register = async (req, res) => {
 try {
    const { name, email, password } = req.body;
    checkUser = await User.findOne({ email });
    if(checkUser) {
        // user already registered
    }else {
        // register user
    }
 } catch (error) {
    res.status(500).json({ message: error.message });
 }
}

export const Login = async (req, res) => {
    
}