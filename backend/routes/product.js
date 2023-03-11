const express = require("express");
const products = require("../data/products");

const router = express.Router();

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
};

// get all the products
router.get("/", (req, res) => {
  try {
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
});

// get product with provided productId
router.get("/:productId", (req, res, next) => {
  try {
    const product = products.find(
      (product) => product.id === req.params.productId
    );
    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    next(err);
  }
});

// delete product with provided productId
router.delete("/:productId", (req, res, next) => {
  try {
    const newData = products.filter(
      (product) => product.id !== req.params.productId
    );
    res.status(200).json(newData);
  } catch (err) {
    next(err);
  }
});

router.use(errorHandler);

// handle 404 errors
router.all("*", (req, res) => {
  res.status(404).json({
    error: "API endpoint not found",
    message:
      "The requested API endpoint could not be found on this server. Please check that you have entered the correct URL.",
    status: 404,
  });
});

module.exports = router;
