const Workout = require('../models/exercise.js');

// API Routes
// =============================================================
module.exports = function (app) {
	// GET
	app.get('/api/workouts', (req, res) => {
		// query db and send back the latest workout to api.js,
		// where it is sent to the front end .js for the front end view.
		Workout.find()
			.then((dbWorkout) => {
				console.log(`last workout:`, dbWorkout);
				res.json(dbWorkout);
			})
			.catch((err) => res.json(err));
	});
	// UPDATE
	app.put('/api/workouts/:id', ({ body, params }, res) => {
		console.log(`The workout ID:`, params.id);

		// in the route, i can send the exercise data to exercise array in the workout model of the database;

		// (db) reference the model,
		// find the object from array, by id from the url,
		// push the (req.body) into the exercise array in the Workout schema
		Workout.findByIdAndUpdate(
			params.id,
			{ $push: { exercises: body } },
			{ new: true }
		)
			.then((dbExercise) => res.json(dbExercise))
			// if their is an error, console log it;
			.catch((err) => console.log(err));
	});

	// CREATE
	app.post('/api/workouts', (req, res) => {
		//use our db variable to insert a new record based on whatever req.body is (req.body may be empty, but thats ok, because our model can just create an ID and a timestamp)
		console.log(`create request`, req.body);

		// syntax to create an object that will fit into the model;
		Workout.create({})
			// then send the body to the database;
			.then((dbExercise) => res.json(dbExercise))
			.catch((err) => console.log(err));
	});

	// some predefined range of workouts, limiting res to (6);
	app.get('/api/workouts/range', (req, res) => {
		Workout.find({})
			.limit(6)
			.then((rangeData) => {
				console.log(rangeData);
				res.json(rangeData);
			});
	});
};
