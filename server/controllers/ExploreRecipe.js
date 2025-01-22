const { fetchRecipeDetails } = require('../services/spoonacularService');

exports.exploreRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await fetchRecipeDetails(id); // Fetch from Spoonacular API
    res.render('recipes/details', { recipe }); // Render the details page
  } catch (error) {
    console.error('Error fetching recipe details:', error.message);
    res.status(500).render('500', { message: 'Unable to fetch recipe details.' });
  }
};
