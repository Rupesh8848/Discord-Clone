const bcrypt = require("bcryptjs");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const postRegister = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    console.log({ userName, password, email });
    const userExists = await User.findOne({ email: email.toLowerCase() });
    if (userExists) {
      return res.status(409).send("Email already in use.");
    }
    const user = new User({ userName, password, email: email.toLowerCase() });
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "24h",
    });

    return res.status(201).json({
      userDetails: {
        mail: user.email,
        token,
        userName: user.userName,
      },
    });
  } catch (error) {
    return res.status(409).send("Error registering user.");
  }
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).send("Email Incorrect!!");
    }
    const userValid = await bcrypt.compare(password, user.password);
    if (!userValid) {
      return res.status(400).send("Password Incorrect!!");
    }
    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_KEY, {
      expiresIn: "120s",
    });

    return res.status(201).json({
      userDetails: {
        mail: user.email,
        token,
        userName: user.userName,
      },
    });
  } catch (error) {
    return res.status(409).send("Error logging user.");
  }
};

module.exports = { postRegister, postLogin };
