import { Document, ObjectId } from "mongoose";
import { IUser } from "./user.type";

export interface IExpenseCategory extends Document {
    name: string,
    icon?: string,
    userId?: ObjectId | IUser

}
