const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite', 
  storage: './src/config/database.sqlite',
  logging: false
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.error('Error connecting to the database:', err));

module.exports = sequelize;