require('../models/database');
const category = require('../models/category');


/**
 * GET /
 * homepage
 */

exports.homepage = async(req, res) => {
	try {
		const limitNumber = 5;
		const categories = await category.find({}).limit(limitNumber);

	res.render('index', { title: 'Flavour Fusion - home', categories });
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