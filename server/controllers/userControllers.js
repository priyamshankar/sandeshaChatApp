const user = require("../connections/dbconnect");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  // console.log(req.body);
  try {
    const { userName, email, password } = req.body;
    const usernameCheck = await user.findOne({ userName });
    if (usernameCheck) {
      return res.json({
        msg: "Username already exists",
        status: false,
      });
    }
    const emailcheck = await user.findOne({ email });
    if (emailcheck) {
      return res.json({
        msg: "email already registered",
        status: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const users = await user.create({
      email,
      userName,
      password: hashedPassword,
    // password
    });
    delete user.password;
    return res.json({ status: true, users });
  } catch (e) {
    // console.log(e);
    next(e);
  }
};
