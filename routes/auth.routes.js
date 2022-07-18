const router = require("express").Router();
const user =  require('../services/auth.services')

//REGISTER
router.post("/register", user.registerUser);

//LOGIN

router.post('/login', user.loginUser);

module.exports = router;
