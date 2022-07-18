
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const user = require('../services/user.services')

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, user.updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, user.deleteUser);

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, user.getUser);

//GET ALL USER
router.get("/", verifyTokenAndAdmin, user.allUser);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, user.userStats);

module.exports = router;
