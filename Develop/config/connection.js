require('dotenv').config();

const Sequelize = require('sequelize');

// Create connection to our database
// Check if there is a JAWSDB_URL environment variable
// If there is, use that value as the connection string
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost', // Tells sequelize to connect to our database on the localhost
      dialect: 'mysql', // Tells sequelize that we're using the MySQL database dialect
      dialectOptions: {
        decimalNumbers: true, 
      },
    });

module.exports = sequelize;
