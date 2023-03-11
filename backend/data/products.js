const data = [
  {
    id: "1",
    name: "Wireless Headphones",
    description: "Experience high-quality sound with these wireless headphones",
    price: 50,
    imageUrl: "https://example.com/headphones.jpg",
    category: "Electronics",
    brand: "Sony",
    seller: {
      id: "123",
      name: "Electronics Store",
    },
    stock: {
      totalQuantity: 100,
      availableQuantity: 50,
    },
    variations: [
      {
        id: "1",
        name: "Color",
        values: ["Black", "White"],
      },
      {
        id: "2",
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
    ],
    tags: ["Headphones", "Wireless"],
    ratings: {
      average: 4.5,
      count: 100,
    },
    warranty: {
      type: "Manufacturer",
      duration: "1 year",
    },
  },
  {
    id: "2",
    name: "Leather Jacket",
    description: "Stay stylish and warm with this leather jacket",
    price: 150,
    imageUrl: "https://example.com/leather-jacket.jpg",
    category: "Clothing",
    brand: "Zara",
    seller: {
      id: "456",
      name: "Clothing Store",
    },
    stock: {
      totalQuantity: 50,
      availableQuantity: 10,
    },
    variations: [
      {
        id: "1",
        name: "Color",
        values: ["Black", "Brown"],
      },
      {
        id: "2",
        name: "Size",
        values: ["Small", "Medium", "Large"],
      },
    ],
    tags: ["Jacket", "Leather"],
    ratings: {
      average: 3.8,
      count: 50,
    },
    warranty: {
      type: "Seller",
      duration: "6 months",
    },
  },
  {
    id: "3",
    name: "Fitness Tracker",
    description: "Track your fitness goals with this smart fitness tracker",
    price: 80,
    imageUrl: "https://example.com/fitness-tracker.jpg",
    category: "Electronics",
    brand: "Fitbit",
    seller: {
      id: "789",
      name: "Fitness Store",
    },
    stock: {
      totalQuantity: 75,
      availableQuantity: 25,
    },
    variations: [
      {
        id: "1",
        name: "Color",
        values: ["Black", "White"],
      },
    ],
    tags: ["Fitness", "Tracker"],
    ratings: {
      average: 4.2,
      count: 75,
    },
    warranty: {
      type: "Seller",
      duration: "1 year",
    },
  },
  {
    id: "0003",
    name: "Women's Running Shoes",
    description: "Comfortable running shoes for women",
    price: 59.99,
    imageUrl: "https://example.com/images/womens-running-shoes.jpg",
    category: "Footwear",
    brand: "Nike",
    seller: {
      id: "s0001",
      name: "Nike",
    },
    stock: {
      totalQuantity: 100,
      availableQuantity: 50,
    },
    variations: [
      {
        id: "var0001",
        name: "Size",
        values: ["6", "7", "8", "9"],
      },
      {
        id: "var0002",
        name: "Color",
        values: ["Black", "Gray", "Pink"],
      },
    ],
    tags: ["running", "women", "comfortable"],
    ratings: {
      average: 4.5,
      count: 100,
    },
    warranty: {
      type: "Manufacturer",
      duration: "1 year",
    },
  },
  {
    id: "0004",
    name: "Bluetooth Earbuds",
    description: "Wireless earbuds with Bluetooth connectivity",
    price: 39.99,
    imageUrl: "https://example.com/images/bluetooth-earbuds.jpg",
    category: "Electronics",
    brand: "Sony",
    seller: {
      id: "s0002",
      name: "Sony",
    },
    stock: {
      totalQuantity: 200,
      availableQuantity: 100,
    },
    variations: [
      {
        id: "var0001",
        name: "Color",
        values: ["Black", "White"],
      },
    ],
    tags: ["earbuds", "wireless", "Bluetooth"],
    ratings: {
      average: 4.2,
      count: 75,
    },
    warranty: {
      type: "Manufacturer",
      duration: "2 years",
    },
  },
  {
    id: "0005",
    name: "Leather Handbag",
    description: "Stylish handbag made of high-quality leather",
    price: 129.99,
    imageUrl: "https://example.com/images/leather-handbag.jpg",
    category: "Accessories",
    brand: "Coach",
    seller: {
      id: "s0003",
      name: "Coach",
    },
    stock: {
      totalQuantity: 50,
      availableQuantity: 10,
    },
    variations: [
      {
        id: "var0001",
        name: "Color",
        values: ["Black", "Brown", "Red"],
      },
    ],
    tags: ["handbag", "leather", "stylish"],
    ratings: {
      average: 4.8,
      count: 50,
    },
    warranty: {
      type: "Seller",
      duration: "30 days",
    },
  },
  {
    id: "B001",
    name: "Rosehip Oil",
    description: "Natural oil for healthy and hydrated skin",
    price: 29.99,
    imageUrl: "https://example.com/images/rosehip-oil.jpg",
    category: "Beauty",
    brand: "The Ordinary",
    seller: {
      id: "S002",
      name: "Sephora",
    },
    stock: {
      totalQuantity: 50,
      availableQuantity: 25,
    },
    variations: [
      {
        id: "V001",
        name: "Size",
        values: ["30 ml", "50 ml"],
      },
    ],
    tags: ["skincare", "moisturizer", "organic"],
    ratings: {
      average: 4.5,
      count: 100,
    },
    warranty: null,
  },
  {
    id: "S001",
    name: "Moleskine Notebook",
    description: "Hardcover notebook with lined pages",
    price: 12.99,
    imageUrl: "https://example.com/images/moleskine-notebook.jpg",
    category: "Stationery",
    brand: "Moleskine",
    seller: {
      id: "S003",
      name: "Staples",
    },
    stock: {
      totalQuantity: 100,
      availableQuantity: 75,
    },
    variations: [
      {
        id: "V001",
        name: "Color",
        values: ["Black", "Blue", "Red"],
      },
    ],
    tags: ["notebook", "writing", "office"],
    ratings: {
      average: 4.0,
      count: 50,
    },
    warranty: null,
  },
  {
    id: "B002",
    name: "Eyeshadow Palette",
    description: "Palette with 12 different shades of eyeshadow",
    price: 49.99,
    imageUrl: "https://example.com/images/eyeshadow-palette.jpg",
    category: "Beauty",
    brand: "Urban Decay",
    seller: {
      id: "S002",
      name: "Sephora",
    },
    stock: {
      totalQuantity: 30,
      availableQuantity: 10,
    },
    variations: [
      {
        id: "V001",
        name: "Color",
        values: ["Naked", "Smoky", "Heat"],
      },
    ],
    tags: ["makeup", "cosmetics", "eyeshadow"],
    ratings: {
      average: 4.8,
      count: 200,
    },
    warranty: null,
  },
];
