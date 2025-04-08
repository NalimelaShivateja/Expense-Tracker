
import { Types } from "mongoose";
import generateModel from "../utils/modelGenerator";
import { IExpenseCategory } from "../interfaces/ExpenseCategory.type";

const ExpenseCategoryModel = generateModel<IExpenseCategory>("ExpenseCategory", {
    name: { type: String, required: true },
    icon: { type: String },
    userId: { type: Types.ObjectId}
}, { timestamps: true })

export default ExpenseCategoryModel;
