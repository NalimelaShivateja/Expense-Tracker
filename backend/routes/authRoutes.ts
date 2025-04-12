import express, { Request } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"],
  prompt: "select_account",  // Ensures account selection screen is forced
}));


router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
  (req: any, res: any) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "PRODUCTION", // use true in production (HTTPS)
      sameSite: "lax", // or "strict" depending on your security needs
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    res.redirect(`http://localhost:5173/dashboard`);
  }
);


router.get("/logout", (req: any, res) => {
  req.logout();
  req.session.destroy();
  res.redirect("http://localhost:5173");
});

export default router;
