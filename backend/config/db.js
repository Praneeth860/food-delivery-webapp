import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Praneeth:mongo9866@cluster0.ilznxqc.mongodb.net/food-del"
    )
    .then(() => console.log("connected to DB"));
};
