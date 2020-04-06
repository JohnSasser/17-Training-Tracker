const API = {
	async getLastWorkout() {
		let res;
		try {
			res = await fetch('/api/workouts');
		} catch (err) {
			console.log(err);
		}
		const json = await res.json();
		console.log(json);
		return json[json.length - 1];
	},
	async addExercise(exercise) {
		// exercise is getting pushed to the the route;
		// exercise is going to be the req.body in the route;
		const id = location.search.split('=')[1];

		const res = await fetch('/api/workouts/' + id, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(exercise),
		});

		const json = await res.json();

		return json;
	},
	// default function params
	async createWorkout(data = {}) {
		const res = await fetch('/api/workouts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		});

		const json = await res.json();

		return json;
	},

	async getWorkoutsInRange() {
		// awaiting the request sent from stats.js
		const res = await fetch(`/api/workouts/range`);
		const json = await res.json();
		console.log(`getWorkoutsInRange():`, json);
		return json;
	},
};
