//route that sends user to AJAX page

app.get("/",function(req,res) {
    res.sendFile(path.join(_dirname, app/routing/htmlRoutes.js));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname,app/public/survey.html));
});