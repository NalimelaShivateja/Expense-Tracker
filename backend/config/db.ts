import mongoose from "mongoose";
import seedCategories from "../seed/SeedCategories";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    await seedCategories();
    console.log("Connected to Local MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
