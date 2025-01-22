const { fetchRecipes } = require('../services/spoonacularService');

exports.searchRecipe = async (req, res) => {
  const query = req.body.query; // Extract the search query
  try {
    const recipes = await fetchRecipes(query); // Fetch from Spoonacular API
    res.render('recipes/search', { recipes }); // Render search results
  } catch (error) {
    console.error('Error searching recipes:', error.message);
    res.status(500).render('500', { message: 'Unable to search recipes.' });
  }
};
