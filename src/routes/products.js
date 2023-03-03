const express = require("express");

const router = express.Router();
const { productsController } = require("../controller/products");

router
  .get("/get-product", productsController.getProducts)
  .post("/post-product", productsController.insertProduct)
  .put("/put-product/:id_product", productsController.updateProduct)
  .delete("/delete-product/:id_product", productsController.deleteProduct);

module.exports = router;
