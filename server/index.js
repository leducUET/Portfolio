require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/authRoute");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://leduc:12345@cluster0.vh3yl86.mongodb.net/?retryWrites=true&w=majority`,
      {}
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
