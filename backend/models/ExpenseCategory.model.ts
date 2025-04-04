
import { Types } from "mongoose";
import { IUser } from "../interfaces/user.type";
import generateModel from "../utils/modelGenerator";

const ExpenseCategoryModel = generateModel<IUser>("ExpenseCategory", {
    name: { type: String, required: true },
    icon: { type: String },
    userId: { type: Types.ObjectId}
}, { timestamps: true })

export default ExpenseCategoryModel;
