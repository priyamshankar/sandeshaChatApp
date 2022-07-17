const { register, login } = require("../controllers/userControllers");

const router = require("express").Router();
// const router = new express.Router();

router.post("/register",register);
router.post("/login",login);

module.exports = router;