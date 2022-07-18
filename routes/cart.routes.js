
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const cart = require('../services/cart.services')

const router = require("express").Router();


//CREATE

router.post("/", verifyToken, cart.createCart);

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, cart.updateCart);

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, cart.deleteCart);

//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, cart.userCart);

// //GET ALL

router.get("/", verifyTokenAndAdmin, cart.allCart);

module.exports = router;
