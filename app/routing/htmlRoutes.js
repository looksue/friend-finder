//set up default and add routes

var server = require ("../../server");

var routeRoot = server.get("/", function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

var routeAdd = server.get("/add", function (req, res) {
    console.log(req);
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

module.exports = routeRoot;
module.exports = routeAdd;