import { Document, ObjectId } from "mongoose";
import { IUser } from "./User.type";

export interface IExpenseCategory extends Document {
    name: string,
    icon?: string,
    userId?: ObjectId | IUser
    createdAt: Date,
    updatedAt: Date
}
