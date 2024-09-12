require('../models/database');

const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


/**
 * POST /register
 * Register a new user
 */

exports.registerUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if all required fields are filled
      if (!username || !email || !password) {
        return res.status(400).render('register', { 
          title: 'Flavour Fusion - Sign Up', 
          error: 'All fields are required' 
        });
      }
  
      const userNameExists = await User.findOne({ username });
      if (userNameExists) {
        return res.status(400).render('register', { 
          title: 'Flavour Fusion - Sign Up', 
          error: 'Username already exists' 
        });
      }
  
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).render('register', { 
          title: 'Flavour Fusion - Sign Up', 
          error: 'Email already exists' 
        });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword
      });
  
      await newUser.save();
  
      res.status(201).render('register', { 
        title: 'Flavour Fusion - Sign Up', 
        success: 'User registered successfully! Please log in.' 
      });
  
    } catch (error) {
      res.status(500).render('register', { 
        title: 'Flavour Fusion - Sign Up', 
        error: error.message || "An error occurred during registration" 
      });
    }
  };
  


/**
 * POST /login
 * Login a user
 */
const createJWT = (payload) => {
    const token = jwt.sign(payload, "jwtsecreteridfjkfijkfdfdf", {
        expiresIn: '7d',
    });

    return token;
};


exports.loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.render('login', { 
          title: 'Login',
          error: 'All fields are required'
        });
      }
  
      const userExists = await User.findOne({ email });
      if (!userExists) {
        return res.render('login', { 
          title: 'Login',
          error: 'User does not exist'
        });
      }
  
      const validPassword = await bcrypt.compare(password, userExists.password);
      if (!validPassword) {
        return res.render('login', { 
          title: 'Login',
          error: 'Invalid password'
        });
      }
  
      const token = createJWT({ userId: userExists._id, role: userExists.role });
  
      res.cookie('jwt', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
      });
  
      return res.redirect('/dashboard'); // Redirect to a protected route or dashboard
  
    } catch (error) {
      console.error('Login error:', error);
      return res.render('login', { 
        title: 'Login',
        error: error.message || "An error occurred"
      });
    }
  };
  