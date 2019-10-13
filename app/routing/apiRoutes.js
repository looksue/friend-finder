// set up the API routes

var server = require ("../../server");

//display all the friends

var apiGetFriends = server.get("/api/friends", function (req, res) {
    return res.json(friends);
});

//display the most compatible friend, or return false

var apiGetFriend = server.get("/api/friend/:friend", function (req, res) {
    var newFriend = req.params.friend;
    console.log(newFriend);
    for (var i = 0; i < friends.length; i++) {
        if (newFriend === friends[i].name) {
            return res.json(friends[i]);
        }
    }
    return res.json(false);
});

//create new friends in JSON input
var apiPostFriends = server.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    newFriend.name = newFriend.name.replace(/\s+/g, "").toUpperCase();
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});

module.exports = apiGetFriend;
module.exports = apiGetFriends;
module.exports = apiPostFriends;