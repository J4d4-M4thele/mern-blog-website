import User from "../models/user.model.js";
import { handleError } from "../helpers/handleError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      next(handleError(404, "Invalid login details"));
    }

    const hashedPassword = user.password;
    const comparePassword = await bcrypt.compare(password, hashedPassword);

    if (!comparePassword) {
      next(handleError(404, "Invalid login details"));
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.JWT_SECRET,
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    res.status(200).json({
      success: true,
      user,
      message: "Logged in successfully",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
