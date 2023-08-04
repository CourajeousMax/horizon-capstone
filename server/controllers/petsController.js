const db = require("../config/knexConnection");

const createPet = async (req, res) => {
  try {
    const { pet_name, species, age } = req.body;
    // Create a new pet record in the pets table
    const newPet = await db("pets").insert({ pet_name, species, age });

    // Return the newly created pet
    res.status(201).json(newPet);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

// Controller function to get a pet by ID
const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await db("pets").findById(id);
    if (!pet) {
      return res.status(404).send("Pet not found");
    }
    res.json(pet);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
module.exports = {
  createPet,
  getPetById,
};
