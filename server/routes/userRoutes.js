const { register, login, getAllusers } = require("../controllers/userControllers");

const router = require("express").Router();
// const router = new express.Router();

router.post("/register",register);
router.post("/login",login);
router.get('/allusers/:id', getAllusers);

module.exports = router;