import generateToken from "./utils/tokenUtil";

require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");
require("./passportConfig");

const app = express();
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173", // Allow frontend URL
    credentials: true,
})); //to allow front end to access the backend

// Middleware
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

// Google OAuth Callback
app.get(
    "/api/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        const token = generateToken(req.user); // Generate JWT token
        res.redirect(`http://localhost:5173/auth/google/callback?token=${token}`);
    }
);

// Connect MongoDB
connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));



