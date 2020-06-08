// Required packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Connection to server (local & mongo)
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// requires routes
const app = express();
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

// Use all while connected
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);






app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});