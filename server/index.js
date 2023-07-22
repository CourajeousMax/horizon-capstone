const express = require("express"); // requiring the express packge
const app = express(); // initializing the express instance
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

//importing all routes
const usersRoute = require("./routes/usersRoute");
const goalsRoute = require("./routes/goalsRoute");
const journalsRoute = require("./routes/journalsRoute");
const affirmationsRoute = require("./routes/affirmationsRoute");
const petsRoute = require("./routes/petsRoute");

app.use(express.json());
app.use(cors());

app.use("/api", usersRoute, goalsRoute,journalsRoute, petsRoute);
app.use("/", affirmationsRoute)

app.get("/", (req, res) => {
  res.send("Welcome to Max server...");
});


app.listen(PORT || 8001, () => {
  console.log(`Running on port ${PORT}`);
});
