import { ObjectId } from "mongoose"
import { IExpenseCategory } from "./ExpenseCategory.type"
import { IUser } from "./user.type"

export interface IExpenseSubCategory extends Document {
    name: string,
    icon?: string,
    category?: IExpenseCategory
    userId?: ObjectId | IUser
}