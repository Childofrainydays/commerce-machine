const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

Tag.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag model for use in other parts of the application
module.exports = Tag;
