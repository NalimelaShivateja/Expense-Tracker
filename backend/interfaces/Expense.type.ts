import { Date, Document, ObjectId } from "mongoose"
import { PaymentMethod } from "../enums/PaymentMethod.enum"
import { PaymentType } from "../enums/PaymentType.enum"
import { RecurringFrequency } from "../enums/RecurringFrequencyType.enum"
import { IUser } from "./User.type"
import { IExpenseCategory } from "./ExpenseCategory.type"
import { IExpenseSubCategory } from "./ExpenseSubCategory.type"

export interface IExpense extends Document {
    userId: ObjectId | IUser
    amount: number,
    day: Date,
    type: PaymentType,
    paymentMethod: PaymentMethod,
    category: ObjectId | IExpenseCategory,
    subCategory: ObjectId | IExpenseSubCategory,
    isRecurring?: Boolean,
    recurringFrequency?: RecurringFrequency,
    comments?: string,
    attachmentURL?: string
    createdAt: Date,
    updatedAt: Date,
}