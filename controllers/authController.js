const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).send("Username already exists.");

    const user = new User({
      username,
      password: await bcrypt.hash(password, 10),
      email,
    });
    await user.save();

    res.status(201).send("User registered successfully.");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send("Invalid username or password.");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).send("Invalid username or password.");

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.tokens = user.tokens.concat({ token });
    await user.save();

    res.send({ token });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
