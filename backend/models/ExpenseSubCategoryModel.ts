
import { Types } from "mongoose";
import generateModel from "../utils/modelGenerator";
import { IExpenseSubCategory } from "../interfaces/ExpenseSubCategory.type";

const ExpenseSubCategoryModel = generateModel<IExpenseSubCategory>("ExpenseSubCategory", {
    name: { type: String, required: true },
    icon: { type: String },
    userId: { type: Types.ObjectId}
}, { timestamps: true })

export default ExpenseSubCategoryModel;