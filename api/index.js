const express = require("express");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db.js");
const port = process.env.PORT || 4000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoute = require("./routes/user.route.js");
app.use("/api/user", userRoute);

const tiktokRoute = require("./routes/tiktok.route.js");
app.use("/api", tiktokRoute);

// Connect to Database
connectDB();

app.listen(port, () =>
  console.log(`Server is running on port ${port}`.white.bold)
);
