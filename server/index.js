const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});