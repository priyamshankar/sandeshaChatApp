const messageModel = require("../connections/messageModel");
module.exports.addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await messageModel.create({
      message: { text: message },
      users: [from, to],
      sender: from,
    });
    if (data) return res.json({ msg: " message added succesfully" });
    return res.json({ msg: "not added error" });
  } catch (e) {
    next(e);
  }
};
module.exports.getAllMessage = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};
