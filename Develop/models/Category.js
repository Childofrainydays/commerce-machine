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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Set the 'id' column to be the primary key
      autoIncrement: true, // Set the 'id' column to auto-increment the primary key value each time a new record is added
    },

    category_name: {
      type: DataTypes.STRING, // String to hold text
      allowNull: false, // Set the 'category_name' column to not allow NULL values
    }
  },
  {
    sequelize, // The Sequelize instance (connection) that the model should use
    timestamps: false, 
    freezeTableName: true, // This option ensures that the table name remains the same as the model name ('category' in this case)
    underscored: true, // This option converts camelCase column names to snake_case in the database
    modelName: 'category', // This option sets the model name to 'category' (used for association methods)
  }
);

// Export the Category model to be used in other parts of the application
module.exports = Category;

