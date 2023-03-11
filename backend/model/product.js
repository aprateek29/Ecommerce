const product = {
  id, // unique identifier for the product
  name, // name of the product
  description, // description of the product
  price, // price of the product
  imageUrl, // URL for the product's image
  category, // category the product belongs to (e.g. electronics, clothing, etc.)
  brand, // brand of the product
  seller: {
    id, // ID of the seller
    name, // name of the seller
  },
  stock: {
    totalQuantity, // total quantity of the product available for sale
    availableQuantity, // quantity of the product currently available for sale
  },
  variations: [
    {
      id, // unique identifier for the variation
      name, // name of the variation (e.g. size, color, etc.)
      values: [], // array of values for the variation (e.g. ["Small", "Medium", "Large"])
    },
    {
      id, // unique identifier for the variation
      name, // name of the variation (e.g. size, color, etc.)
      values: [], // array of values for the variation (e.g. ["Small", "Medium", "Large"])
    },
    {
      id, // unique identifier for the variation
      name, // name of the variation (e.g. size, color, etc.)
      values: [], // array of values for the variation (e.g. ["Small", "Medium", "Large"])
    },
  ],
  tags: [],
  ratings: {
    average, // average rating of the product
    count, // number of ratings for the product
  },
  warranty: {
    type, // type of warranty (e.g. manufacturer, seller, extended, etc.)
    duration, // duration of the warranty (e.g. "1 year", "2 years", etc.)
  },
};
