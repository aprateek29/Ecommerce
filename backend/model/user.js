const mongoose = require('mongoose');

const User = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profileImgUrl: String,
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String
  },
  cartId: String,
  ordersId: String,
  wishlistId: String
});

// const User = {
//     id, // unique identifier for the user
//     username, // user's username
//     email, // user's email address
//     password, // hashed password
//     profileImgUrl,
//     shippingAddress: {
//         street, // user's street address
//         city, // user's city
//         state, // user's state
//         zipCode // user's ZIP code
//     },
//     cartId, // ID of the user's cart object
//     ordersId, // ID of the user's orders object
//     wishlistId, // ID of the user's wishlist object
// }

module.exports = User;
