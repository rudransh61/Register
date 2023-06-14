const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
var bodyParser=require("body-parser");


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));


var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/register').then((ans) => {
    console.log("ConnectedSuccessful")
}).catch((err) => {
    console.log("Error in the Connection")
});

// module.exports = conn;

const Schema = mongoose.Schema;
  
// Creating Structure of the collection
const collection_structure = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})
  
// Creating collection
const collections = mongoose.model(
        "data", collection_structure)
  
// Without middleware
app.get('/', function (req, res) {
	console.log('/GET /')
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
	console.log('/GET /home')
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
	console.log('/GET /login')
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
	console.log('/GET /signin')
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

app.post('/signin',async function (req,res){
	console.log('/POST /signin')
	const data = {
		email: req.body.email,
		password: req.body.password
	};
	console.log(data);
	collections.create({
		email:req.body.email,
		password: req.body.password
	}).then((ans) => {
		console.log("Document inserted")
	})


	
})

app.listen(PORT, function (err) {
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});


