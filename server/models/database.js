const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://idkmal:Malcom123@cluster0.vp765.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
        console.log('Connected to MongoDB');
        });

// MODELS
require('./Category.js');
require('./Recipe.js');
require('./user.js');
require('./favorites')

