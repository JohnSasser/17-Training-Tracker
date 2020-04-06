const express = require('express');
// morgan hooks into our routes and console.logs our requests and responses;
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const db = require('./models');

const app = express();

// logger / morgan will throw errors for me on logging requests
app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// connect my routes
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// connect to mongoose to mongo.db
mongoose.connect(
	// process.env.MONGODB_URI || 'mongodb://localhost/workoutsdb',
	// ***** replace local host with this then,
	// ***** push heroku origin master
	'mongodb://userA1:passwordA1@ds231229.mlab.com:31229/heroku_c25mf537',
	{
		useNewUrlParser: true,
	}
);

app.listen(PORT, () => {
	console.log(`App running on port localhost://${PORT}`);
});
