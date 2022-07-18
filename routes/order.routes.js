
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const order = require('../services/order.services')
const router = require("express").Router();

//CREATE

router.post("/", verifyToken, order.createOrder);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, order.updateorder);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, order.deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, order.userOrder);

// //GET ALL

router.get("/", verifyTokenAndAdmin, order.allOrder);

// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, order.incomeMonthly);

module.exports = router;
