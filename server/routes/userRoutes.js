const { register } = require("../controllers/userControllers");

const router = require("express").Router();
// const router = new express.Router();

router.post("/register",register);


router.get("/reg",(req,res)=>{
    res.send("this is the slash page");
});

module.exports = router;