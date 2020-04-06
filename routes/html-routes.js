// require path to use "__dirname";
const path = require('path');
const router = require('express').Router();

//  Routes
// =============================================================
module.exports = function (app) {
	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads index.html
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	// exercise route loads exercise.html
	app.get('/exercise', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/exercise.html'));
	});

	// stats route loads stats.html
	app.get('/stats', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/stats.html'));
	});
};
