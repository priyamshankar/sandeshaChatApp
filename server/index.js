const express = require("express");
const cors = require ("cors");
require ('./connections/dbconnect');
const userRoutes = require("./routes/userRoutes");


const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api/auth",userRoutes);

//setting up the port
app.listen(process.env.PORT,()=>{
    console.log(`localhost connected on port ${process.env.PORT}`);
})

// app.use(router);