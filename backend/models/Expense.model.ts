
import { IExpense } from "../interfaces/expense.type";
import generateModel from "../utils/modelGenerator";
import { Schema } from "mongoose"

const ExpenseModel = generateModel<IExpense>("Expense", {
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    amount: { type: Number, required: true },
    day: { type: Date, required: true },
    type: { type: Number, required: true },
    paymentMethod: { type: Number, required: true },
    category: { type: Number, required: true },
    subCategory: { type: Number, required: true },
    isRecurring: { type: Boolean },
    recurringFrequency: { type: Number },
    comments: { type: String },
    attachmentURL: { type: String },
}, { timestamps: true })

export default ExpenseModel;
