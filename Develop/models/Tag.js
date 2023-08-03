const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Prevent null values
      primaryKey: true, // Set the 'id' column to be the primary key
      autoIncrement: true, // Set the 'id' column to auto-increment the primary key value each time a new record is added
    },
    
    // name the tag
    tag_name: {
      type: DataTypes.STRING, // String to hold text
      allowNull: false, // Set the 'tag_name' column to not allow NULL values
    },
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
