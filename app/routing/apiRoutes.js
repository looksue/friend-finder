//display all the friends

app.get ("/api/friends", function (req, res) {
    return res.json(friends);
});

//display the most compatible friend, or return false

app.get("/api/friend/:friend",function(req, res) {
    var newFriend = req.params.friend;
    console.log(newFriend);
    for (var i=0; i < friends.length; i++) {
        if (newFriend===friends[i].name) {
            return res.json(friends[i]);
        }
    }
    return res.json (false);
});

//create new friends in JSON input
app.post("/api/friends", function(req,res) {
    var newFriend = req.body;
    newFriend.name = newFriend.name.replace(/\s+/g, "").toUpperCase();
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
});