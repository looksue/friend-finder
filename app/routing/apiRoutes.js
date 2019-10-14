// set up the API routes

// link to the friends data file
var friends = require("../data/friends");

module.exports = function (app) {

    //display all the friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //create new friends in JSON format
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        // newFriend.name = newFriend.name.replace(/\s+/g, "").toUpperCase();
        console.log("----------" + newFriend + "----------");
        friends.push(newFriend);
        res.json(newFriend);
    });
};