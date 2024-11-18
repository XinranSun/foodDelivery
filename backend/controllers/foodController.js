import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filiname = "${req.file.filename}";
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filiname,
  });
  try {
    await food.save();
    res.status(201).json({ success: true, message: "Food added" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Food not added" });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Food not found" });
  }
};
// remove food item
const removeFood = async (req, res) => {
  try {
    // find food.image
    // const food = await foodModel.findById(req.body.id);
    // fs.unlinkSync(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Food not deleted" });
  }
};

export { addFood, listFood, removeFood };
