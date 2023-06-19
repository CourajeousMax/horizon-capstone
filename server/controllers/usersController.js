const registerUser = (req, res) => {
  try {
    const { username, email, password } = req.body;
    
  } catch (err) {
    res.status(500).send('error in registering user')
  }
};

module.exports = {
  registerUser,
};
