// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import necessary packages
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Import database connection function
const connectDB = require('./server/config/db');

// Import helper function for checking active routes
const { isActiveRoute } = require('./server/helpers/routeHelpers');

// Initialize Express app
const app = express();

// Define the port number for the server
const PORT = process.env.PORT || 2702;

// Connect to the database
connectDB();

// Middleware setup
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(methodOverride('_method')); // Enable HTTP method overriding

// Configure session management
app.use(session({
  secret: 'keyboard cat', // Secret key for session encryption
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI // MongoDB connection URI
  }),
}));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Configure Express to use EJS templating engine
app.use(expressLayout);
app.set('layout', './layouts/main'); // Set default layout file
app.set('view engine', 'ejs'); // Set view engine to EJS

// Make isActiveRoute function available to all views
app.locals.isActiveRoute = isActiveRoute; 

// Define routes
app.use('/', require('./server/routes/main')); // Main routes
app.use('/', require('./server/routes/admin')); // Admin routes

// Start the server and listen on the defined port
app.listen(PORT, ()=> {
  console.log(`App listening on port ${PORT}`);
});
