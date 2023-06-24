const axios = require("axios");

const getAffirmation = async (req, res) => {
  try {
    const result = await axios.get("https://www.affirmations.dev/");
    res.status(200).json(result.data);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAffirmation,
};
