const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'This field is required',
        unique: true
    },
    email: {
        type: String,
        required: 'This field is required',
        unique: true
    },
    password: {
        type: String,
        required: 'This field is required'
    },
    favorites: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Recipe' 
    }
    
});

module.exports = mongoose.model('User', userSchema);
