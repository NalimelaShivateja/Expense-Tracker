import { Date, Document, ObjectId } from "mongoose"
import { PaymentMethod } from "../enums/paymentMethod.enum"
import { ExpenseCategory } from "../enums/expenseCategory.enum"
import { ExpenseSubCategory } from "../enums/ExpenseSubCategory.enum"
import { PaymentType } from "../enums/PaymentType.enum"
import { RecurringFrequency } from "../enums/RecurringFrequencyType.enum"
import { IUser } from "./user.type"

export interface IExpense extends Document {
    userId: ObjectId | IUser
    amount: number,
    day: Date,
    type: PaymentType,
    paymentMethod: PaymentMethod,
    category: ExpenseCategory,
    subCategory: ExpenseSubCategory,
    isRecurring?: Boolean,
    recurringFrequency?: RecurringFrequency,
    comments?: string,
    attachmentURL?: string
    createdAt: Date,
    updatedAt: Date,
}