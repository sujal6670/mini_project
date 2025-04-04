// server.js
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

// Import the connectDB function from db.js
const connectDB = require("./db");

const usersRoute = require("./routes/usersRoute");
const carsRoute = require("./routes/carsRoute");
const bookingsRoute = require("./routes/bookingsRoute");

const app = express();
const port = process.env.PORT || 5000;

mongoose.set("strictQuery", true);

app.use(express.json());

// Call the connectDB function to establish a database connection
connectDB();

// Routes
app.use("/api/cars/", carsRoute);
app.use("/api/users/", usersRoute);
app.use("/api/bookings/", bookingsRoute);

// Deployment Configuration
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.listen(port, () => console.log(`Node JS Server Started on Port ${port}`));
