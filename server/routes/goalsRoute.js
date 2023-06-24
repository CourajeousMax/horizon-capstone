const express = require("express");
const router = express.Router();
const { getAllGoals } = require("../controllers/goalsController");

// Route to get all goals
router.get("/goals", getAllGoals);

module.exports = router;
