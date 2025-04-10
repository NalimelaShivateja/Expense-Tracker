import ExpenseCategoryModel from "../models/ExpenseCategoryModel";

const seedCategories = async () => {
    try {
        // Check if categories exist
        const existingCategories = await ExpenseCategoryModel.countDocuments();
        if (existingCategories > 0) {
            console.log("Categories already exist, skipping seed.");
            return;
        }

        const categories = [
            { name: "Groceries", icon: "🍽️" },
            { name: "Utility Bills", icon: "🚗" },
            { name: "Fuel", icon: "💊" },
            { name: "Food & Dining", icon: "" },
            { name: "Diet", icon: "" },
            { name: "Transport & Travel", icon: "" },
            { name: "Healthcare & Medical", icon: "" },
            { name: "Education & Learning", icon: "" },
            { name: "Entertainment", icon: "" },
            { name: "Shopping", icon: "" },
            { name: "Subscriptions & Memberships", icon: "" },
            { name: "EMI", icon: "" },
            { name: "Lending Money to others", icon: "" },
            { name: "Helping hand", icon: "" },
            { name: "Other Expenses", icon: "" },
            { name: "Investments & Planning", icon: "" },
        ];
        await ExpenseCategoryModel.insertMany(categories);

        console.log("✅ Categories Seeded!");
        // process.exit(); // Exit the script
    } catch (error) {
        console.error("Seeding Failed:", error);
        process.exit(1);
    }
};

export default seedCategories;
