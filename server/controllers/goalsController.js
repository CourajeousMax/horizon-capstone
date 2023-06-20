const db = require("../config/knexConnection");

const getAllGoals =async (req,res) =>  {
      try {
        const goals = await db("goals").select("*");
        res.json(goals);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
}

module.exports = {
    getAllGoals
}