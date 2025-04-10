import ExpenseSubCategoryModel from "../models/ExpenseSubCategoryModel";

const seedSubCategories = async () => {
    try {
        // Check if categories exist
        const existingSubCategories = await ExpenseSubCategoryModel.countDocuments();
        if (existingSubCategories > 0) {
            console.log("Sub categories already exist, skipping seed.");
            return;
        }

        const subCategories = [
            { "name": "House Rent", "icon": "" },
            { "name": "Electricity Bill", "icon": "" },
            { "name": "Gas Bill", "icon": "" },
            { "name": "Wifi Bill", "icon": "" },
            { "name": "Mobile Recharge", "icon": "" },
            { "name": "LIC payments", "icon": "" },
            { "name": "Bike", "icon": "" },
            { "name": "Car", "icon": "" },
            { "name": "Scooty", "icon": "" },
            { "name": "Outside Dining", "icon": "" },
            { "name": "Ordered Food", "icon": "" },
            { "name": "Vegetables", "icon": "" },
            { "name": "Fruits", "icon": "" },
            { "name": "Chicken", "icon": "" },
            { "name": "Protein Powder", "icon": "" },
            { "name": "Eggs", "icon": "" },
            { "name": "Milk", "icon": "" },
            { "name": "Curd", "icon": "" },
            { "name": "Oats", "icon": "" },
            { "name": "Rental Car Service", "icon": "" },
            { "name": "Uber/Rapido/Ola", "icon": "" },
            { "name": "General Medical Checkup", "icon": "" },
            { "name": "Out Patient Bill", "icon": "" },
            { "name": "Blood/Urine Tests", "icon": "" },
            { "name": "Medicines Purchases", "icon": "" },
            { "name": "Online/Offline course", "icon": "" },
            { "name": "Entrance Exam Fee", "icon": "" },
            { "name": "Linkedin Subscription", "icon": "" },
            { "name": "Movies", "icon": "" },
            { "name": "Games", "icon": "" },
            { "name": "Resorts", "icon": "" },
            { "name": "Hotel Bookings", "icon": "" },
            { "name": "Clothes", "icon": "" },
            { "name": "Electronics", "icon": "" },
            { "name": "Footwear", "icon": "" },
            { "name": "Other Item Purchases", "icon": "" },
            { "name": "Ott Apps", "icon": "" },
            { "name": "Other Apps", "icon": "" },
            { "name": "House", "icon": "" },
            { "name": "Recurring Deposit", "icon": "" },
            { "name": "Systematic Investment Plan", "icon": "" },
            { "name": "Mutual Funds", "icon": "" },
            { "name": "Stocks", "icon": "" },
            { "name": "Chitti Share", "icon": "" },
            { "name": "Gold Purchase", "icon": "" },
            { "name": "Lending To Family Members", "icon": "" },
            { "name": "Lending To Friends", "icon": "" },
            { "name": "Donation Through Online", "icon": "" },
            { "name": "Donation through Cash In Person", "icon": "" },
            { "name": "Credit Card", "icon": "" },
            { "name": "Other Bonds", "icon": "" },
            { "name": "Other Schemes", "icon": "" }
          ]
          
        await ExpenseSubCategoryModel.insertMany(subCategories);

        console.log("✅ Sub categories Seeded!");
        // process.exit(); // Exit the script
    } catch (error) {
        console.error("Sub categories seeding Failed:", error);
        process.exit(1);
    }
};

export default seedSubCategories;
