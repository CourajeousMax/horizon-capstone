const express = require("express");
const router = express.Router();
const { createPet, getPetById } = require("../controllers/petsController.js");

router.get("/pets", createPet);
router.get("/pets/:id", getPetById);
module.exports = router;
