var notesData = require("../../db/db.json");

// ROUTING
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

module.exports = function (app) {
	// Retrieves notes from `db.json` file and returns notes to the user.
	app.get("/api/notes", function (req, res) {
		res.json(notesData);
	});
	// Recieves a new note to save on request body, adds new note to `db.json` file and returns new note to the user.
	app.post("/api/notes", function (req, res) {
		notesData.push(req.body);
		res.json(notesData);
	});
	// Receives a paramter with the id of note to delete, finds object with that id in `db.json` file, deletes that note from array and re-renders notes to user.
	app.delete("/api/notes/:id", function (req, res) {
		for (var i = 0; i < notesData.length; i++) {
			var noteIndex = notesData[i];
			console.log(noteIndex)
			var noteToDelete = req.params.id;
			if (noteIndex.id === noteToDelete) {
				notesData.splice(i, 1);
			}
		};
		res.json(notesData);
	});

};
