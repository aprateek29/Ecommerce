const express = require('express');

const productsData = require('../data/products');
const Product = require('../model/product');
const { handleCRUDOperations, resetModelData } = require('../util/functions');

const router = express.Router();

router.get('/reset', (req, res, next) =>
  resetModelData(req, res, next, Product, productsData)
);

router.get('/', (req, res, next) =>
  handleCRUDOperations(req, res, next, Product)
);

router.post('/', (req, res, next) =>
  handleCRUDOperations(req, res, next, Product)
);

router.get('/:productId', (req, res, next) =>
  handleCRUDOperations(req, res, next, Product, req.params.productId)
);

router.put('/:productId', (req, res, next) =>
  handleCRUDOperations(req, res, next, Product, req.params.productId)
);

router.delete('/:productId', (req, res, next) =>
  handleCRUDOperations(req, res, next, Product, req.params.productId)
);

module.exports = router;
