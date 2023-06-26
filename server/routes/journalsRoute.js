const express = require("express");
const router = express.Router();
const { getAllJournals } = require("../controllers/journalsController");

// Route to get all goals
router.get("/journals", getAllJournals);

module.exports = router;
