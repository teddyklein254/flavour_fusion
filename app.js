const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
require('dotenv').config();
const spoonacularRoutes = require('./server/routes/spoonacularRoutes'); // New Route File

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(cookieParser('FlavourFusionSecure'));
app.use(session({
  secret: 'FlavourFusionSecretSession',
  saveUninitialized: true,
  resave: true,
}));
app.use(flash());
app.use(fileUpload());

// View engine setup
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
const routes = require('./server/routes/recipeRoutes.js');
const userRoutes = require('./server/routes/userRoute.js');
app.use('/', routes);
app.use('/', userRoutes);
app.use('/recipes', spoonacularRoutes); // New Route for Spoonacular

// Error Handling
app.use((req, res, next) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Server Error' });
});

// Start server
app.listen(port, () => console.log(`Listening to port ${port}`));
