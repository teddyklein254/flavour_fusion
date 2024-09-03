require('../models/database');
const category = require('../models/Category');
const recipe = require('../models/Recipe');

/**
 * GET /
 * homepage
 */

exports.homepage = async(req, res) => {
	try {
		const limitNumber = 5;
		const categories = await category.find({}).limit(limitNumber);
		const latest = await recipe.find({}).sort({_id: -1}).limit(limitNumber);

		const food = { latest };

	res.render('index', { title: 'Flavour Fusion - home', categories, food });
	} catch (error) {
		res.status(500).send({message: error.message || "error occured"});
	}
}


/**
 * GET /categories
 * Categories
 */

exports.exploreCategories = async(req, res) => {
	try {
		const limitNumber = 20;
		const categories = await category.find({}).limit(limitNumber);

	res.render('categories', { title: 'Flavour Fusion - categories', categories });
	} catch (error) {
		res.status(500).send({message: error.message || "error occured"});
	}
}






	







// async function insertDummyCategoryData() {

// 	try {
// 		await category.insertMany([
// 			{
// 				"name": "Thailand Specialities",
// 				"image": "Thai.jpg"
// 			 },
// 			 {
// 				"name": "Spanish Specialities",
// 				"image": "Spanish.jpg"
// 			 },
// 			 {
// 				"name": "Italian Specialities",
// 				"image": "Italian.jpg"
// 			 },
// 			 {
// 				"name": "Mexican Specialities",
// 				"image": "Mexican.jpg"
// 			 },
// 			 {
// 				"name": "Japanese Specialities",
// 				"image": "Japanese.jpg"
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
