const express = require("express");
const router = express.Router();
const { getAffirmation } = require("../controllers/affirmationsController")

router.get("/", getAffirmation);

module.exports = router;