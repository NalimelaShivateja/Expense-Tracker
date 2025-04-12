import generateToken from "./utils/tokenUtil";
import dotenv from "dotenv"
import express, { Request } from "express"
import "./passportConfig";
import session from "express-session";
import passport from "passport";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import profileRoutes from "./routes/profileRoutes";
import expenseRouter from "./routes/expenseRoutes";
import cors from "cors";
import cookieParser from "cookie-parser";
import authenticateJWT  from "./middlewares/AuthMiddleware";


dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Allow frontend URL
    credentials: true,
})); //to allow front end to access the backend


app.use(cookieParser());
app.use(express.json())


// Middleware
app.use(session({ secret: "secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);


app.use("/api", authenticateJWT as any);
app.use("/api/profile", profileRoutes);
app.use("/api/expense", expenseRouter)

connectDB();

app.listen(5000, () => console.log("Server running on port 5000"));

// Google OAuth Callback
// app.get(
//     "/api/auth/google/callback",
//     passport.authenticate("google", { failureRedirect: "/login" }),
//     (req: any, res) => {
//         const token = generateToken(req.user); // Generate JWT token
//         res.redirect(`http://localhost:5173/auth/google/callback?token=${token}`);
//     }
// );

// require("./passportConfig");

// "allowImportingTsExtensions": true   
// "type": "module",