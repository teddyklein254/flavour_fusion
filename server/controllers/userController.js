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
        console.log(req.body); // Add this line to see the incoming request data
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({ message: 'All fields are required' });
        }

        const userNameExists = await User.findOne({ username });
        if (userNameExists) {
            return res.status(400).send({ message: 'Username already exists' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).send({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).send({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).send({ message: error.message || "error occurred" });
    }
}


/**
 * POST /login
 * Login a user
 */
const createJWT = (payload) => {
    const token = jwt.sign(payload, "jwtsecreteridfjkfijkfdfdf", {
        expiresIn: '7d',
    });

    return token;
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ message: 'All fields are required' });
        }

        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(400).send({ message: 'User does not exist' });
        }

        const validPassword = await bcrypt.compare(password, userExists.password);
        if (!validPassword) {
            return res.status(400).send({ message: 'Invalid password' });
        }

        const token = createJWT({ userId: userExists._id, role: userExists.role });

        res.cookie('jwt', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
        });

        return res.status(200).send({ message: 'Login successful' });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ message: error.message || "An error occurred" });
    }
}





