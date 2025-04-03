import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// Google OAuth Login
// router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.redirect(`http://localhost:5173/dashboard?token=${token}`);
  }
);

// Logout Route
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("http://localhost:5173");
});

export default router;
