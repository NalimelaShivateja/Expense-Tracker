import express from "express";
const profileRouter = express.Router();

profileRouter.get("", (req, res) => { res.json({ name: "Shivateja Nalimela", email: "shivamnalimela2002@gmail.com" }) })

export default profileRouter

