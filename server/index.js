const express = require("express"); // requiring the express packge
const app = express(); // initializing the express instance
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use("/api", usersRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Stephany server...");
});

app.listen(8000, () => {
  console.log(`Running on port ${PORT}`);
});
