import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect("mongodb+srv://sxr473:Sxr473123@cluster0.x2spq.mongodb.net/food-del")
    .then(() => {
      console.log("DB connected");
    });
};
    