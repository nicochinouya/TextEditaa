// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Set the port number to either the environment variable PORT or 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the '../client/dist' directory
app.use(express.static('../client/dist'));

// Parse URL-encoded bodies and JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require the htmlRoutes module and pass the app instance to it
require('./routes/htmlRoutes')(app);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
