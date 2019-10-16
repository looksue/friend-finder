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

        // point at the scores for this new friend
        var friendScores = newFriend.scores;

        // initialize a few variables
        var bffName = '';
        var bffPhoto = '';

        // set up a "high score", lower is better
        var bffScore = 50;

        // loop through the other friends
        for (var i = 0; i < friends.length; i++) {

            // calculate the difference between this friend and all the others
            var thisFriendScore = 0;
            for (var question = 0; question < friendScores.length; question++) {
                thisFriendScore = thisFriendScore + Math.abs(friends[i].scores[question] - friendScores[question]);
            };

            // If this one is lower, that's the new bff
            if (thisFriendScore < bffScore) {
                bffScore = thisFriendScore;
                bffName = friends[i].name;
                bffPhoto = friends[i].photo;
            };
        };

        // Add new user (friends.push) and return
        friends.push(newFriend);
        res.json({ bffName: bffName, bffPhoto: bffPhoto });
    });
};
