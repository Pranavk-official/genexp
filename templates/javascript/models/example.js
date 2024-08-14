/**
 * Defines the user schema for MongoDB using Mongoose.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Schema definition for a user.
 * @typedef {Object} UserSchema
 * @property {string} username - The username of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The hashed password of the user.
 */
const UserSchema = new Schema({
  username: String,
  email: String,
  password: String
});

/**
 * Creates and exports a Mongoose model based on the UserSchema.
 */
module.exports = mongoose.model('User', UserSchema);


/**
 * Sets up a Sequelize instance for connecting to a PostgreSQL database.
 */

const { Sequelize } = require('sequelize');

/**
 * Initializes Sequelize with database connection parameters.
 * Note: Replace 'database', 'username', 'password' with actual values.
 */
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

/**
 * Defines the user model for PostgreSQL using Sequelize.
 * @typedef {Object} User
 * @property {string} username - The username of the user.
 * @property {string} email - The email address of the user.
 * @property {string} password - The hashed password of the user.
 */
const User = sequelize.define('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
});

module.exports = User;



/**
 * Sets up a Sequelize instance for connecting to a MySQL database.
 */

// const { Sequelize } = require('sequelize');

// /**
//  * Initializes Sequelize with database connection parameters.
//  * Note: Replace 'database', 'username', 'password' with actual values.
//  */
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// /**
//  * Defines the user model for MySQL using Sequelize.
//  * @typedef {Object} User
//  * @property {string} username - The username of the user.
//  * @property {string} email - The email address of the user.
//  * @property {string} password - The hashed password of the user.
//  */
// const User = sequelize.define('User', {
//   username: Sequelize.STRING,
//   email: Sequelize.STRING,
//   password: Sequelize.STRING
// });

// module.exports = User;
