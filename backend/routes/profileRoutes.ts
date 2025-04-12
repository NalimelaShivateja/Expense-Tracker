import express, { Request, Response } from "express";
import UserModel from "../models/UserModel";
import AuthRequest from "../interfaces/AuthRequest";

const profileRouter = express.Router();

profileRouter.get("/", async (req: AuthRequest, res: Response) => {
    try {

        const { decodedJWT } = req
        const user = await UserModel.findById(decodedJWT.id)
        res.status(200).json(user)
    }
    catch (error: any) {
        console.log("Error fetching the user")
        res.status(401).json({ error: error, message: "failed to fetch the user" })
    }
})

profileRouter.put("/update", async (req: AuthRequest, res: Response) => {
    try {
        const { decodedJWT } = req
        if (req.body !== undefined) {
            const user = await UserModel.findByIdAndUpdate(decodedJWT.id, { $set: req.body }, { new: true })
            if (!user) {
                throw new Error("User not found")
            }
            return res.status(201).json(user);
        }
        else{
            throw new Error("Request body not found")
    }

    }
    catch (error: any) {
        console.log("Error fetching the user")
        res.status(401).json({ error: error, message: "failed to fetch the user" })
    }
})

export default profileRouter;

