import express from "express";
import { getUser, updateUser, getAllUsers, deleteUser } from "../controllers/User.controller.js";
import upload from "../middleware/multer.js";
import { authenticate } from "../middleware/authenticate.js";

const UserRoute = express.Router(authenticate);

UserRoute.get("/get-user/:userid", getUser);
UserRoute.put("/update-user/:userid", upload.single("file"), updateUser);
UserRoute.get("/all-users", getAllUsers);
UserRoute.delete("/delete/:id", deleteUser);

export default UserRoute;
 