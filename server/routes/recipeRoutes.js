const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Routes
 */
router.get('/', recipeController.homepage); // Homepage route
router.get('/recipe/:id', recipeController.exploreRecipe); // View specific recipe details
router.get('/categories', recipeController.exploreCategories); // View all categories
router.get('/categories/:id', recipeController.exploreCategoriesById); // Recipes by category
router.post('/search', recipeController.searchRecipe); // Search recipes
router.get('/explore-latest', recipeController.exploreLatest); // View latest recipes
router.get('/explore-random', recipeController.exploreRandom); // Random recipe exploration

// Remove unused or redundant routes
// Removed submit, edit, and delete recipe routes since they may not apply to Spoonacular API

module.exports = router;
