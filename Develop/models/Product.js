// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // define columns 
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER, // sets data type 
      allowNull: false, // Prevent null values
      primaryKey: true, // and sets the column as the primary key
      autoIncrement: true, // turn on auto increment to handle the primary key
    },

    // define a product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // define a price column
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false, 
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product', // This option sets the model name to 'product' (used for association methods)
  }
);

// Export the Product model for use in other parts of the application
module.exports = Product;
