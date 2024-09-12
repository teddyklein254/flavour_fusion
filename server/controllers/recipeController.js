require('../models/database');
const category = require('../models/Category');
const Recipe = require('../models/Recipe'); // Renamed to Recipe

/**
 * GET /
 * homepage
 */
exports.homepage = async (req, res) => {
    try {
        console.log('homepage function called');
        const limitNumber = 5;
        const categories = await category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
        const italian = await Recipe.find({ 'category': 'Italian' }).limit(limitNumber);
        const mexican = await Recipe.find({ 'category': 'Mexican' }).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
        const spanish = await Recipe.find({ 'category': 'Spanish' }).limit(limitNumber);
        const japanese = await Recipe.find({ 'category': 'Japanese' }).limit(limitNumber);
        const kenyan = await Recipe.find({ 'category': 'Kenyan' }).limit(limitNumber);

        const food = { latest, thai, italian, mexican, american, spanish, japanese, kenyan };

        res.render('index', { title: 'Flavour Fusion - home', categories, food });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error occurred" });
    }
};

/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async (req, res) => {
    try {
        const limitNumber = 20;
        const categories = await category.find({}).limit(limitNumber);

        res.render('categories', { title: 'Flavour Fusion - categories', categories });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error occurred" });
    }
};


/**
 * GET /categories/:id
 * Categories By Id
 */
exports.exploreCategoriesById = async (req, res) => {
  try {
    let categoryId = req.params.id;
    const limitNumber = 20;
    const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);
    res.render('categories', { title: 'Flavour Fusion - Categories', categoryById });
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occurred" });
  }
};


// Recipe Id not working on the category part and needs to be fixed before the application is presented




/**
 * GET /recipe/:id
 * Recipe
 */
exports.exploreRecipe = async (req, res) => {
    try {
        let recipeId = req.params.id; // Corrected from req.param.id to req.params.id
        const foundRecipe = await Recipe.findById(recipeId); // Changed variable name to foundRecipe
        if (!foundRecipe) {
            return res.status(404).send({ message: 'Recipe not found' });
        }
        res.render('recipe', { title: 'Flavour Fusion - Recipe', recipe: foundRecipe });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error occurred" });
    }
};


/**
 *POST /search
 * Search
 */
exports.searchRecipe = async (req, res) => {
    try {
        let searchTerm = req.body.searchTerm; // Corrected to use a semicolon
        let recipe = await Recipe.find({ $text: { $search: searchTerm, $diacriticSensitive: true } }); // Corrected to use parentheses
        res.render('search', { title: 'Flavour Fusion - Search', recipe });
    } catch (error) {
        res.status(500).send({ message: error.message || "Error occurred" });
    }
};

/**
 * GET /explore-latest
 * Explore Latest 
*/
exports.exploreLatest = async(req, res) => {
  try {
    const limitNumber = 20;
    const recipe = await Recipe.find({}).sort({ _id: -1 }).limit(limitNumber);
    res.render('explore-latest', { title: 'Cooking Blog - Explore Latest', recipe } );
  } catch (error) {
    res.satus(500).send({message: error.message || "Error Occured" });
  }
} 



	







// async function insertDummyCategoryData() {

// 	try {
// 		await category.insertMany([
// 			{
// 				"name": "Thai",
// 				"image": "Thai.jpg"
// 			 },
// 			 {
// 				"name": "Spanish",
// 				"image": "Spanish.jpg"
// 			 },
// 			 {
// 				"name": "Italian",
// 				"image": "Italian.jpg"
// 			 },
// 			 {
// 				"name": "Mexican",
// 				"image": "Mexican.jpg"
// 			 },
// 			 {
// 				"name": "Japanese",
// 				"image": "Japanese.jpg"
// 			 },
//              {
// 				"name": "Kenyan",
// 				"image": "kenyan.jpeg"
// 			 },
//               {
// 				"name": "American",
// 				"image": "burgers.jpg"
// 			 }

// 		]);

// 	} catch (error) {
// 		console.log('err', + error)
// 	}
	
// }
// insertDummyCategoryData();  // call the function to insert dummy data into the database





// // /**
// //  * Insert Dummy Recipe Data
// //  */
// async function insertDummyRecipeData() {
//     try {
//         // Check if any recipes already exist to avoid duplicates
//         const existingRecipes = await recipe.countDocuments();
//         if (existingRecipes === 0) {
//             await recipe.insertMany([
//                 { 
//                     "name": "Green Pasta",
//                     "description": "A delicious green pasta recipe.",
//                     "email": "tobiusmauru@freelance.co.ke",
//                     "ingredients": [
//                         "1 level teaspoon baking powder",
//                         "1 level teaspoon cayenne pepper",
//                         "1 level teaspoon hot smoked paprika"
//                     ],
//                     "category": "Italian", 
//                     "image": "Green_pasta.png"
//                 },
//                 { 
//                     "name": "Guacamole Salad",
//                     "description": "A fresh guacamole salad recipe.",
//                     "email": "Jacpapa@alx.co.ke",
//                     "ingredients": [
//                         "2 ripe avocados",
//                         "1 lime, juiced",
//                         "1/2 teaspoon salt",
//                         "1/2 cup diced onion",
//                         "3 tablespoons chopped fresh cilantro"
//                     ],
//                     "category": "American", 
//                     "image": "Guacamole.jpg"
//                 },
// 				{ 
//                     "name": "Pad Thai",
//                     "description": "Crispy fried eggs, special tamarind & tofu sauce, peanut sprinkle.",
//                     "email": "iyawangui@moringa.co.ke",
//                     "ingredients": [
//                         "150g rice noodles",
//                         "sesame oil",
//                         "20g unsalted peanuts",
//                         "2 cloves of garlic",
//                         "80g silken tofu",
// 						"low-salt soy sauce",
// 						"2 teaspoons tamarind paste",
// 						"2 teaspoons sweet chilli sauce",
// 						"2 limes"

//                     ],
//                     "category": "Thai", 
//                     "image": "Pad-thai.jpg"
//                 },
// 					{ 
//                     "name": "Beef stew and ugali",
//                     "description": "A classic Kenyan beef stew accompanied with properly cooked Ugali is everyone’s favourite. This method is one that results in beautifully cooked tender meat, however, you may some times purchase meat that is hard and needs to be boiled before adding to the pot.",
//                     "email": "shakur@pedi.co.ke",
//                     "ingredients": [
//                         	" 2 tbsp oil",
// 							"1 onion, chopped",
// 							"1 tbsp garlic, minced",
// 							"1 tsp curry powder",
// 							"500 gms beef cubes",
// 							"1 beef stock cube",
// 							"Salt to taste",
// 							"Freshly ground black pepper",
// 							"3 tomatoes, diced",
// 							"4 cups water",
// 							"Coriander leaves, chopped",
// 							"For Ugali- 3 cups water",
// 							"1 1/2 cups Unga wa Dola maize meal",

//                     ],
//                     "category": "Kenyan", 
//                     "image": "ugali.jpg"
//                 },
//             ]);
//             console.log('Dummy data inserted successfully');
//         } else {
//             console.log('Dummy data already exists.');
//         }
//     } catch (error) {
//         console.log('Error inserting dummy data:', error);
//     }
// }

// // Call the function to insert dummy data into the database
// insertDummyRecipeData();
