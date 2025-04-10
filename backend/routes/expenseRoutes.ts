import { ExpenseFilter } from "../interfaces/ExpenseFilter.type";
import ExpenseModel from "../models/ExpenseModel";
import express, { Request, Response } from "express";

const expenseRouter = express.Router()

expenseRouter.post("new", async (req: Request, res: Response) => {
    try {
        const newExpense = new ExpenseModel({ ...req.body })
        const savedExpense = await newExpense.save()
        res.status(201).json(savedExpense);
    }
    catch (error) {
        console.error("Error creating expense:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

expenseRouter.post("all", async (req: Request<{}, {}, ExpenseFilter>, res: Response) => {
    const filter = {} as ExpenseFilter;
    const { amount,
        startDate,
        endDate,
        type,
        paymentMethod,
        category,
        subCategory,
        comments } = req.body;

    if (amount !== undefined) {
        filter.amount= amount
    }

    try {
        const expenses = await ExpenseModel.find();
        res.status(200).json(expenses);
    }
    catch (error) {
        console.log("Error reading all expenses")
        res.status(500).json({ error: error, message: "failed to fetch expenses" })
    }
})

expenseRouter.put("update/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedExpense = await ExpenseModel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        if (!updatedExpense) {
            throw new Error("Expense Not Found");
        }
        res.status(200).json(updatedExpense);
    }
    catch (error) {
        console.log("Error updating the expense")
        res.status(500).json({ error: error, message: "failed to update" })
    }
})

expenseRouter.delete(":id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deleteExpense = await ExpenseModel.findByIdAndDelete(id)
        if (!deleteExpense) {
            throw new Error("Expense Not Found");
        }
        res.status(200).json(deleteExpense);
    }
    catch (error) {
        console.log("Error deleting the expense")
        res.status(500).json({ error: error, message: "failed to delete" })
    }
})

export default expenseRouter