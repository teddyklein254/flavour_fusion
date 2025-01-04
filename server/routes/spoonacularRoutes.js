const express = require('express');
const router = express.Router();
const { fetchRecipes, fetchRecipeDetails } = require('../services/spoonacularService');

// Route: Search Recipes
router.get('/search', async (req, res) => {
  const query = req.query.q || 'chicken'; // Default query
  try {
    const recipes = await fetchRecipes(query);
    res.render('recipes/search', { query, recipes });
  } catch (error) {
    console.error('Error fetching recipes:', error.message);
    req.flash('error', 'Could not fetch recipes. Try again later.');
    res.redirect('/');
  }
});

// Route: Recipe Details
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await fetchRecipeDetails(id);
    res.render('recipes/details', { recipe });
  } catch (error) {
    console.error('Error fetching recipe details:', error.message);
    req.flash('error', 'Could not fetch recipe details. Try again later.');
    res.redirect('/recipes/search');
  }
});

module.exports = router;