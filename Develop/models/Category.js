// Import necessary components from the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the Sequelize instance (connection) from the specified file
const sequelize = require('../config/connection.js');

// Define the Category class which extends Sequelize's Model class
class Category extends Model {}

// Use the 'init' method to define the model's attributes and configuration options
Category.init(
  {
    // Define columns (also known as attributes) of the Category model
    // Specify the data type and any additional constraints for each column
  },
  {
    // The first argument of 'init' is an object that describes the attributes of the model
    sequelize, // The Sequelize instance (connection) that the model should use
    timestamps: false, // This option disables automatic timestamp fields 'createdAt' and 'updatedAt'
    freezeTableName: true, // This option ensures that the table name remains the same as the model name ('category' in this case)
    underscored: true, // This option converts camelCase column names to snake_case in the database
    modelName: 'category', // This option sets the model name to 'category' (used for association methods)
  }
);

// Export the Category model to be used in other parts of the application
module.exports = Category;

