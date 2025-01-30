const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');

const initDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully');
      await sequelize.sync();
      console.log('Models synchronized');
    } catch (err) {
      console.error('Database initialization failed:', err.message);
    }
  };

module.exports = { initDB, User, Post };