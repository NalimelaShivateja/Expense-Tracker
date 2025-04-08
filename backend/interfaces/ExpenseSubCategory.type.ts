import { ObjectId, Document } from "mongoose"
import { IExpenseCategory } from "./ExpenseCategory.type"
import { IUser } from "./User.type"

export interface IExpenseSubCategory extends Document {
    name: string,
    icon?: string,
    userId?: ObjectId | IUser,
    createdAt: Date,
    updatedAt: Date
}