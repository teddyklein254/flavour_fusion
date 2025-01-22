const axios = require('axios');
const API_KEY = process.env.SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
      params: {
        query,
        apiKey: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error('Error fetching recipes: ' + error.message);
  }
};

const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/${id}/information`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching recipe details: ' + error.message);
  }
};

module.exports = { fetchRecipes, fetchRecipeDetails };
