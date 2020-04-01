const express = require('express');
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
require('./routes/html')(app);

// connect to mongoose to mongo.db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', {
	useNewUrlParser: true
});

app.listen(PORT, () => {
	console.log(`App running on port localhost:${PORT}!`);
});
