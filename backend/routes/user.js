const express = require('express');

const userData = require('../data/users');
const User = require('../model/user');
const { handleCRUDOperations, resetModelData } = require('../util/functions');

const router = express.Router();

router.get('/reset', (req, res, next) =>
  resetModelData(req, res, next, User, userData)
);

router.get('/', (req, res, next) => handleCRUDOperations(req, res, next, User));

router.post('/', (req, res, next) =>
  handleCRUDOperations(req, res, next, User)
);

router.get('/:userId', (req, res, next) =>
  handleCRUDOperations(req, res, next, User, req.params.userId)
);

router.put('/:userId', (req, res, next) =>
  handleCRUDOperations(req, res, next, User, req.params.userId)
);

router.delete('/:userId', (req, res, next) =>
  handleCRUDOperations(req, res, next, User, req.params.userId)
);

module.exports = router;
