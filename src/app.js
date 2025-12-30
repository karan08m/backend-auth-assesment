const express = require("express");
console.log("APP.JS LOADED");

const app = express();

app.use(express.json());


app.use("/auth", require("./routes/authRoutes.js"));

app.get("/", (req, res) => {
  res.send("API running");
});

module.exports = app;