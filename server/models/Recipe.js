const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required: 'This field is required'
    },
    ingredients: {
        type: [String],  // Changed to an array of strings
        required: 'This field is required'
    },
    category: {
        type: String,
        enum: ['Thai', 'Mexican', 'American', 'Spanish', 'Italian', 'Japanese', 'Kenyan' ],
        required: 'This field is required'
    },
    image: {
        type: String,
        required: 'This field is required'
    }
});

// Create a text index for searching
recipeSchema.index({ name: 'text', description: 'text' });

// Wildcard Indexing
// recipeSchema.index({'$**': 'text' });


// Export the Recipe model
module.exports = mongoose.model('Recipe', recipeSchema);
