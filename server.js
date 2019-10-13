//include the packages (remember to run "npm install <package>")
var express = require("express");
var path = require("path");

//set up the express app
var app = express();
var PORT = 3000; 

module.exports = app;

//include js files
const friends = require ("./app/data/friends");
const htmlRoutes = require ("./app/routing/htmlRoutes");
const apiRoutes = require ("./app/routing/apiRoutes");

// set up the express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// call the functions that set up the HTML routes
routeRoot();
routeAdd();

// call the functions that set up the API routes
apiGetFriend();
apiGetFriends();
apiPostFriends();

//start the server to begin listening
app.listen(PORT, function() {
    console.log('\033[2J'); // clear the terminal
    console.log("Friend-Finder is listening on port: " + PORT);
});