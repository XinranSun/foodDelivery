// cors dotenv body-parser multer stripe validator nodemon
//   express mongoose jsonwebtoken bcrypt

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js"
import cartRouter from "./routes/cartRoute.js";

// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
// cors 链接前端
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)



app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Listening on  http://localhost:${port}`);
});
// mongodb+srv://sxr473:<db_password>@cluster0.x2spq.mongodb.net/?
