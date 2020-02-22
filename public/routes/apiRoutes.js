var notesData = require("../../db/db.json");

// ROUTING
// =*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=

module.exports = function (app) {

	app.get("/api/notes", function (req, res) {
		res.json(notesData);
	});

	app.post("/api/notes", function (req, res) {
		// Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
		notesData.push(req.body);
		res.json({
			notesData
		});
	});

	app.get("/api/notes/:id", function (req, res) { //Should recieve a query paramter containing the id of a note to delete.
		res.json(notesData); //This means you'll need to find a way to give each note
		//a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property,
	});

};
