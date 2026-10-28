import express from "express";
import { getUser, updateUser } from "../controllers/User.controller.js";
import upload from "../middleware/multer.js";
import { authenticate } from "../middleware/authenticate.js";

const UserRoute = express.Router(authenticate);

UserRoute.get("/get-user/:userid", getUser);
UserRoute.put("/update-user/:userid", upload.single("file"), updateUser);

export default UserRoute;
 