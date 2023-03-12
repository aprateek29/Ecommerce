const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  category: String,
  brand: String,
  seller: {id: String, name: String},
  stock: {
    totalQuantity: Number,
    availableQuantity: Number
  },
  variations: [
    {
      id: String,
      name: String,
      values: [String],
    },
  ],
  tags: [String],
  ratings: {
    average: Number,
    count: Number
  },
  warranty: {
    from: String,
    duration: Number
  }
});

const Product = mongoose.model('Product', productSchema);


// const product = {
//   id, // unique identifier for the product
//   name, // name of the product
//   description, // description of the product
//   price, // price of the product
//   imageUrl, // URL for the product's image
//   category, // category the product belongs to (e.g. electronics, clothing, etc.)
//   brand, // brand of the product
//   seller: {
//     id, // ID of the seller
//     name, // name of the seller
//   },
//   stock: {
//     totalQuantity, // total quantity of the product available for sale
//     availableQuantity, // quantity of the product currently available for sale
//   },
//   variations: [
//     {
//       id, // unique identifier for the variation
//       name, // name of the variation (e.g. size, color, etc.)
//       values: [], // array of values for the variation (e.g. ["Small", "Medium", "Large"])
//     },
//     {
//       id, // unique identifier for the variation
//       name, // name of the variation (e.g. size, color, etc.)
//       values: [], // array of values for the variation (e.g. ["Small", "Medium", "Large"])
//     },
//     {
//       id, // unique identifier for the variation
//       name, // name of the variation (e.g. size, color, etc.)
//       values: [], // array of values for the variation (e.g. ["Small", "Medium", "Large"])
//     },
//   ],
//   tags: [],
//   ratings: {
//     average, // average rating of the product
//     count, // number of ratings for the product
//   },
//   warranty: {
//     type, // type of warranty (e.g. manufacturer, seller, extended, etc.)
//     duration, // (in months) duration of the warranty (e.g. "1 year", "2 years", etc.)
//   },
// };

module.exports = Product;