const authService = require('../services/authService');

exports.register = async (req, res) => {
    try {
    const { email, password } = req.body;

    // Проверка входных данных
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = await authService.register(email, password);
    console.log('Registered user:', user);
    res.status(201).json(user);
    } catch (err) {
        console.error('Error in register:', err.message);
        res.status(400).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Проверка входных данных
      if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      const token = await authService.login(email, password);
      console.log('Generated token:', token);
      res.json({ token });
    } catch (err) {
      console.error('Error in login:', err.message);
      res.status(400).json({ message: err.message });
    }
};  