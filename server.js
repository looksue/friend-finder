//include the packages (remember to run "npm install <package>")
var express = require("express");

//set up the express app
var app = express();
var PORT = process.env.PORT || 3000;

// set up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//include js files
require ("./app/routing/apiRoutes")(app);
require ("./app/routing/htmlRoutes")(app);

//start the server to begin listening
app.listen(PORT, function() {
    console.log('\033[2J'); // clear the terminal
    console.log("Friend-Finder is listening on port: " + PORT);
});