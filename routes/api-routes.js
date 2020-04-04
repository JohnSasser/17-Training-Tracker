const db = require('../models');

// API Routes
// =============================================================
module.exports = function(app) {
	// GET
	app.get('/api/workouts', (req, res) => {
		// query db and send back the latest workout to api.js,
		// where it is sent to the front end .js for the front end view.
		db.Workout.find({})
			.then(dbWorkout => {
				console.log(`last workout:`, dbWorkout);
				res.json(dbWorkout);
			})
			.catch(err => {
				res.json(err);
			});
	});
	// UPDATE
	app.put('/api/workouts/:id', (req, res) => {
		//use our db variable to insert a new record based on whatever req.body is (req.body may be empty, but thats ok, because our model can just create an ID and a timestamp)
		console.log(``, req.params.id);
		console.log(`the json body data getting UPDATED`, req.body);
	});

	// CREATE
	app.post('/api/workouts', (req, res) => {
		//use our db variable to insert a new record based on whatever req.body is (req.body may be empty, but thats ok, because our model can just create an ID and a timestamp)
		console.log(`create request`, req.body);
		db.Workout.create(req.body);
	});

	// don't know yet what the hell is range?????
	app.post('/api/workouts/range', (req, res) => {
		// console.log(`range endpoint run`);
	});
};
