// cosnt for Model and DataTypes to be imported from sequelize
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// set up fields and rules for ProductTag model
ProductTag.init(
  // define columns
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER, // sets data type
      allowNull: false, // Prevent null values
      primaryKey: true, // sets the column as the primary key
      autoIncrement: true, // turn on auto increment to handle the primary key
    },
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export the ProductTag model for use in other parts of the application
module.exports = ProductTag;
