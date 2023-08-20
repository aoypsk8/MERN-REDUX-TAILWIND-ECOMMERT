const UserModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER USER\\
exports.registerUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;

    var user = await UserModel.findOne({ username });
    if (user) {
      res.status(500).send("There are this user already !!");
    } else {
      const salt = await bcrypt.genSalt(10);
      user = new UserModel({
        username,
        password,
        phone,
      });
      user.password = await bcrypt.hash(password, salt);
      user.save();
      res.send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};

//LOGIN USER \\

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    var user = await UserModel.findOneAndUpdate({ username }, { new: true });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send("Password is not match");

      const payload = {
        user: {
          username: user.username,
        },
      };
      jwt.sign(payload, "jwtscret", { expiresIn: "2h" }, (error, token) => {
        if (error) {
          throw error;
        }
        res.json({ token, payload });
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
};
