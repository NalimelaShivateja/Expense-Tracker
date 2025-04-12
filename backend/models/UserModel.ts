
import { IUser } from "../interfaces/User.type";
import generateModel from "../utils/modelGenerator";

const UserModel = generateModel<IUser>("User", {
  googleId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String },
  password: { type: String }
}, { timestamps: true })

export default UserModel;
