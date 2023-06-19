const db = require("../config/knexConnection");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExist = await db("users")
      .where({
        email,
      })
      .select("email");

    //Check if user exists
    if (userExist[0]) {
      return res.status(400).send("Email is already associated with an account");
    }
    //insert the info to the users table that has their columns => username,email,password
    await db("users").insert({
      username,
      email,
      password: await bcrypt.hash(password, 15),
    });
    return res.status(200).send("Registration successful");
  } catch (err) {
    console.log(err);
    res.status(500).send("error in registering user");
  }
};

module.exports = {
  registerUser,
};
