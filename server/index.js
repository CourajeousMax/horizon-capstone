const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env

app.use(express.json());
app.use(cors());

app.listen(8000, () => {
  console.log(`Running on port ${PORT}`);
});