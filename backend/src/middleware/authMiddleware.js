const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided or invalid format' });
    }
    const token = authHeader.split(' ')[1];
    console.log('token:', token);
    console.log('authHeader:', authHeader);

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {

      if (err) {
        console.error('Token verification error:', err.message);
        return res.status(403).json({ message: 'Invalid token' });
      }
  
      req.userId = decoded.id; // Установка userId
      console.log('Authenticated User ID:', req.userId);
      next();
    });
};