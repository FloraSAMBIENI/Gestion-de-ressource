const express = require("express");
const dotenv = require("dotenv");
const { connectDb } = require("./config/database");
const userRouter = require("./routes/user.Routes");
const ressourceRouter = require("./routes/ressource.Routes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Iinitialized Database Configuration
connectDb();

app.use(express.json());

// Import The Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/ressource", ressourceRouter);

// Listened to the PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
