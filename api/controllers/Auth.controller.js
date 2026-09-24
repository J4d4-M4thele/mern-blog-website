import User from "../models/user.model.js";
import { handleError } from "../helpers/handleError.js";
import bcrypt from "bcryptjs";

export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      // user already registered
      next(handleError(409, "User already registered"));
    }
    // register user
    const hashedPassword = await bcrypt.hashSync(password);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User registered successfully" });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const Login = async (req, res, next) => {};
