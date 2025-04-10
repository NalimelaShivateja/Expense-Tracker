import generateToken from "./utils/tokenUtil";
import dotenv from "dotenv"
import express from "express"
// import session from "express-session";
// import passport from "passport";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import expenseRouter from "./routes/expenseRoutes";
// require("./passportConfig");

// "allowImportingTsExtensions": true   
// "type": "module",


dotenv.config();
const app = express();

// import cors from "cors";
// app.use(cors({
//     origin: "http://localhost:5173", // Allow frontend URL
//     credentials: true,
// })); //to allow front end to access the backend

// Middleware
// app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
app.use(express.json())
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/expense/", expenseRouter)

// Google OAuth Callback
// app.get(
//     "/api/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "/login" }),
//     (req, res) => {
//         const token = generateToken(req.user); // Generate JWT token
//         res.redirect(`http://localhost:5173/auth/google/callback?token=${token}`);
//     }
// );

connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));



