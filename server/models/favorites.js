// routes/favorites.js
const express = require('express');
const router = express.Router();
const User = require('../user.js'); // Assuming user model is in the parent directory
const Recipe = require('../Recipe.js'); // Adjust path to your Recipe model

// Middleware for authentication (assumes you're using a middleware to attach user to `req.user`)

// Add a recipe to favorites
router.post('/:recipeId', async (req, res) => {
    const userId = req.user._id; // Assuming `req.user` contains the authenticated user
    const recipeId = req.params.recipeId;

    try {
        // Add the recipe to user's favorites, using $addToSet to avoid duplicates
        await User.findByIdAndUpdate(userId, { $addToSet: { favorites: recipeId } });
        res.status(200).json({ message: 'Recipe added to favorites.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Remove a recipe from favorites
router.delete('/:recipeId', async (req, res) => {
    const userId = req.user._id;
    const recipeId = req.params.recipeId;

    try {
        // Remove the recipe from user's favorites
        await User.findByIdAndUpdate(userId, { $pull: { favorites: recipeId } });
        res.status(200).json({ message: 'Recipe removed from favorites.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all favorite recipes for the user
router.get('/', async (req, res) => {
    const userId = req.user._id;

    try {
        // Populate user's favorite recipes
        const user = await User.findById(userId).populate('favorites');
        res.status(200).json(user.favorites);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

