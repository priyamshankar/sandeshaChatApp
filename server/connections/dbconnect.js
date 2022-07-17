const mongoose = require("mongoose");
require("dotenv").config();

//setting up the mongoose database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Database connected");
  }).catch((err)=>{
    console.log(err);
  })
// user schema and colleciton are below this comment

const sandeshaSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    min:3,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    min: 3,
    unique:true,
  },
  password: {
    required: true,
    type: String,
    min:3,
  }
});

const sandeshaModel = new mongoose.model("sandesha", sandeshaSchema);
module.exports = sandeshaModel;
