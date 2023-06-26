const db = require("../config/knexConnection");

const getAllJournals = async (req, res) => {
  try {
    const journals = await db("journals").select("*");
    res.json(journals);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllJournals,
};
