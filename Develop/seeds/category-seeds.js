// requires the Category model to use its schema from Develop\models\Category.js
const { Category } = require('../models');

// creates an array of objects using category model's schema
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// uses sequelize's bulkCreate method to insert data into database
// bulkCreate is similar to the insertMany() method in mongoose
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
