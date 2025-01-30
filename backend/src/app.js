const express = require('express');
const cors = require('cors');
const { initDB } = require('./models');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

initDB();

module.exports = app;