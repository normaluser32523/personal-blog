const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  mediaUrl: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });

module.exports = Post;