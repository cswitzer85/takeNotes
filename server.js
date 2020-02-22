// Dependencies
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
var express = require("express")
var path = require("path")
// Express setup
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
var app = express();
var PORT = process.env.PORT || 9001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Variables
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
// var notes = [];

// Routes
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

require("./public/routes/apiRoutes.js")(app);
require("./public/routes/htmlRoutes")(app);

// app.get("/", function (req, res) {
// 	res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// app.get("/notes", function (req, res) {
// 	res.sendFile(path.join(__dirname, "../public/notes.html"));
// });

// Server listening
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});





