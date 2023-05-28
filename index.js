const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
var bodyParser=require("body-parser");

const mongoose = require("mongoose");
  
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const registerSchema = new mongoose.Schema({
    email: String,
    password: String
});

const register = mongoose.model('Student', registerSchema);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Without middleware
app.get('/', function (req, res) {
	const options = {
		root: path.join(__dirname)
	};

	res.sendFile("/static/html/index.html", options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', "/static/html/index.html");
		}
	});
});
app.get('/home', function (req, res) {
	const options = {
		root: path.join(__dirname)
	};

	res.sendFile("/static/html/index.html", options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', "/static/html/index.html");
		}
	});
});
app.get('/login', function (req, res) {
	const options = {
		root: path.join(__dirname)
	};

	res.sendFile("/static/html/login.html", options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', "/static/html/login.html");
		}
	});
});
app.get('/signin', function (req, res) {
	const options = {
		root: path.join(__dirname)
	};

	res.sendFile("/static/html/signin.html", options, function (err) {
		if (err) {
			next(err);
		} else {
			console.log('Sent:', "/static/html/signin.html");
		}
	});
});





app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});


