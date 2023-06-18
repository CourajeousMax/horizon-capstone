const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;
const db = require("mysql");

app.use(express.json());
app.use(cors());

app.use("/", (req,res) => {
  res.send('Hello World');
})
app.listen(PORT || 8001, () => {
  console.log(`Running on port ${PORT}`);
});