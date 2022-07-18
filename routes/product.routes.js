
const {
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();
const product = require('../services/product.services')

//CREATE

router.post("/", verifyTokenAndAdmin, product.createProduct);

//UPDATE
router.put("/:id", verifyTokenAndAdmin, product.updateProduct);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, product.deleteProduct);

//GET PRODUCT
router.get("/find/:id", product.getProduct);

//GET ALL PRODUCTS
router.get("/", product.allProduct);

module.exports = router;
