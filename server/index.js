const express = require("express"); // requiring the express packge
const app = express(); // initializing the express instance
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const knex = require("knex");
const knexConnection = require("./config/knexConnection");
const db = knex(knexConnection.development);

//importing all routes
const usersRoute = require("./routes/usersRoute");

app.use(express.json());
app.use(cors());
app.use("/api", usersRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Stephany server...");
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
