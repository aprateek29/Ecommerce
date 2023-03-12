const mongoose = require('mongoose');
const { Types } = mongoose;

const _isValidId = (id) => {
  return Types.ObjectId.isValid(id);
};

const handleCRUDOperations = async (req, res, next, model, id) => {
  try {
    switch (req.method) {
      case 'GET':
        if (id) {
          if (!_isValidId(id)) {
            res.status(404).json({ error: `Object with id ${id} not found.` });
          }
          const item = await model.findById(id).select('-__v');
          if (item) {
            res.status(200).json(item);
          } else {
            res.status(404).json({ error: `Object with id ${id} not found.` });
          }
        } else {
          const items = await model.find().select('-__v');
          res.status(200).json(items);
        }
      case 'POST':
        const newItem = new model(req.body);
        await newItem.save();
        return res.status(201).json(newItem);
      case 'PUT':
        const updatedItem = await model.findByIdAndUpdate(id, req.body, {
          new: true
        });
        if (!updatedItem) {
          return res
            .status(404)
            .send(`${resourceName} with ID ${id} not found`);
        }
        return res.json(updatedItem);
      case 'DELETE':
        const deletedItem = await model.findByIdAndDelete(id);
        if (!deletedItem) {
          return res
            .status(404)
            .send(`${resourceName} with ID ${id} not found`);
        }
        return res.status(204).send();
      default:
        return res.status(405).send('Method not allowed');
    }
  } catch (err) {
    console.error(err.stack);
    return next(err);
  }
};

const resetModelData = async (req, res, next, model, ogData) => {
  try {
    await model.deleteMany({});
    await model.insertMany(ogData);
    res.status(200).json({ message: `All model data has been reset.` });
  } catch (err) {
    next(err);
  }
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  console.error(err.reason);
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = { handleCRUDOperations, resetModelData, errorHandler };
