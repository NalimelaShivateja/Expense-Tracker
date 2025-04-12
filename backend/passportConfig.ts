import { Strategy as GoogleStrategy, Profile, StrategyOptions, VerifyCallback } from 'passport-google-oauth20';
import passport from "passport";
import UserModel from "./models/UserModel";
import { Document } from "mongoose";
import { IUser } from "./interfaces/User.type";

import dotenv from "dotenv";
dotenv.config();

const options = {
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: "/api/auth/google/callback",
  scope: ["profile", "email"],
  // passReqToCallback: true
}

const verifyFn: (
  accessToken: string,
  refreshToken: string,
  profile: Profile,
  done: VerifyCallback
) => void = async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await UserModel.findOne({ googleId: profile.id });

    if (!user) {
      user = new UserModel({
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails?.[0].value,
        avatar: profile.photos?.[0].value
      });
      await user.save();
    }

    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

passport.use(
  new GoogleStrategy(
    options,
    verifyFn
  )
);

passport.serializeUser((user: any, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await UserModel.findById(id);
  done(null, user);
});
