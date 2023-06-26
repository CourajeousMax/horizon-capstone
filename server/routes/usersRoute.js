const express = require("express");
const db = require("../config/knexConnection");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { registerUser } = require("../controllers/usersController");

router.post("/register", registerUser);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Please enter the required fields");
  }

  const user = await db("users").where({ email: email }).first();
  if (!user) {
    return res.status(400).send("Invalid email");
  }

  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).send("Invalid password");
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_KEY, { expiresIn: "24h" });

  res.json({ token });
});

router.get("/current", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Please login");
  }
  const authHeader = req.headers.authorization;
  const authToken = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(authToken, process.env.JWT_KEY);

    const user = await db("users").where({ id: decoded.id }).first();
    delete user.password;
    res.json(user);
  } catch (error) {
    return res.status(401).send("Invalid auth token");
  }
});

module.exports = router;
