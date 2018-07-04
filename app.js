const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Genre =require('./models/genre');
Book =require('./models/book');
Register =require('./models/Register');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/RA_node');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/books or /api/genres');
});

app.get('/api/users', (req, res) => {
	Register.getusers((err, register) => {
		if(err){
			throw err;
		}
		res.json(register);
	});
});

app.post('/api/users', (req, res) => {
	var register = req.body;
	Register.adduser(register, (err, register) => {
		if(err){
			throw err;
		}
		res.json(register);
	});
});

app.put('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	var register = req.body;
	Register.updateuser(id, register, {}, (err, register) => {
		if(err){
			throw err;
		}
		res.json(register);
	});
});

app.delete('/api/users/:_id', (req, res) => {
	var id = req.params._id;
	Register.removeuser(id, (err, register) => {
		if(err){
			throw err;
		}
		res.json(register);
	});
});

app.get('/api/books', (req, res) => {
	Book.getBooks((err, books) => {
		if(err){
			throw err;
		}
		res.json(books);
	});
});

app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/api/books/:_id', (req, res) => {
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, {}, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', (req, res) => {
	var id = req.params._id;

	Book.removeBook(id, (err, book) => {
		if(err){
			throw err;
		}
		res.json(book);
	});
});

app.post('/api/login', (req, res) => {
	var email=req.body.email;
	var password=req.body.password;
	Register.loginuser(email,password, (err, email,password) => {
		if(err){
			throw err;
		}
		res.json(email,password);
	});
});


 


app.listen(4000);
console.log('Running on port 4000...');


