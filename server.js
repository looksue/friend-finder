//include the packages (remember to run "npm install <package>")
var express = require("express");
var path = require("path");

//include js files
const friends = require ("./app/data/friends");
const htmlRoutes = require ("./app/routing/htmlRoutes");
const apiRoutes = require ("./app/routing/apiRoutes");

//set up the express app
var app = express();
var PORT = 3000; 

// set up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//start the server to begin listening
app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
});