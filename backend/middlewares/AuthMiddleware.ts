// middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AuthRequest from "../interfaces/AuthRequest";
dotenv.config();




const authenticateJWT = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Access Denied. No Token Provided." });
    }

    try {
        const decodedJWT = jwt.verify(token, process.env.JWT_SECRET as string);
        req.decodedJWT = decodedJWT;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid Token" });
    }
};


export default authenticateJWT;