const express = require("express");
const router = express.Router();
const { createPet, getPetById } = require("../controllers/petsController.js");

router.get("/pets", createPet, getPetById);

module.exports = router;