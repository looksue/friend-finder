//set up default and /add routes

var path = require("path");

module.exports = function (app) {

    // HTML pages to serve when user requests a URL

    app.get("/", function (req, res) { // root (/) defaults to home.html
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/add", function (req, res) { // add (/add) redirects to survey.html
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
};