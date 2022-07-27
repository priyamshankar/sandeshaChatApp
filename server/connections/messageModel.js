const mongoose = require("mongoose");
require("dotenv").config();

//setting up the mongoose database
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
// user schema and colleciton are below this comment

const sandeshaMsgSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sandesha",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const sandeshaMsgModel = new mongoose.model("messeges", sandeshaMsgSchema);
module.exports = sandeshaMsgModel;
