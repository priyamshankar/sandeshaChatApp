const { register } = require("../controllers/userControllers");

const router = require("express").Router();
// const router = new express.Router();

router.post("/register",register);

module.exports = router;