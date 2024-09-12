const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');


router.get('/register', (req, res) => {
    res.render('register', { title: 'Sign Up' });
  });

router.post('/register', userController.registerUser);

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/login', userController.loginUser);

module.exports = router;
