// Import the 'path' module from the Node.js standard library
const path = require('path');

// Export a function that takes in an 'app' object as a parameter
module.exports = (app) =>
  // Define a route handler for the root URL ('/')
  app.get('/', (req, res) =>
    // Send the 'index.html' file as the response
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
