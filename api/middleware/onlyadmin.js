import jwt from "jsonwebtoken";
import { handleError } from "../helpers/handleError.js";

export const onlyadmin = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) {
      return next(handleError(403, "Unauthorised"));
    }

    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (decodeToken.role === "admin") {
      req.user = decodeToken;
      return next();
    }

    return next(handleError(403, "Unauthorised"));
  } catch (error) {
    next(handleError(403, error.message));
  }
};