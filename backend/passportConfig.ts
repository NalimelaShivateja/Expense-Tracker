const GoogleStrategy = require("passport-google-oauth20").Strategy;
import passport from "passport";
import UserModel from "./models/UserModel";
import { Document } from "mongoose";
import { IUser } from "./interfaces/User.type";

passport.use("",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (_accessToken: any, _refreshToken: any, profile: { id: any; displayName: any; emails: { value: any; }[]; }, done: (arg0: unknown, arg1: (Document<unknown, {}, IUser> & IUser & Required<{ _id: unknown; }> & { __v: number; }) | null) => any) => {
      try {
        let user = await UserModel.findOne({ googleId: profile.id });

        if (!user) {
          user = new UserModel({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          await user.save();
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(null, user);
});
