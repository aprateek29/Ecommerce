const express = require("express");
const mongoose = require("mongoose");

const productsData = require("../data/products");
const Product = require("../model/product");

const router = express.Router();
const ObjectId = mongoose.Types.ObjectId;

router.get("/reset", resetProductData);

router.get("/", getAllProducts);
router.route("/:productId").get(getProductById).delete(deleteProductById);
router.use(errorHandler);

async function getAllProducts(req, res, next) {
  try {
    const products = await Product.find().select("-__v");
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
}

async function getProductById(req, res, next) {
  try {
    const product = await Product.findById({
      _id: req.params.productId,
    }).select("-__v");

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    next(err);
  }
}

async function deleteProductById(req, res, next) {
  try {
    const result = await Product.deleteOne(
      {
        _id: new ObjectId(req.params.productId),
      },
      { acknowledged: true }
    );
    if (result.deletedCount > 0)
      res.status(200).json({ message: "Deleted Successfully" });
    res.status(404).json({ message: "Product not found" });
  } catch (err) {
    next(err);
  }
}

async function resetProductData(req, res, next) {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    res.status(200).json({ message: "All product data has been reset" });
  } catch (err) {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  console.error(err.reason);
  res.status(500).json({ error: "Internal Server Error" });
}

module.exports = router;
