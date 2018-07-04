var express = require('express');
//var  logger = require('morgan');
var bodyParser = require('body-parser');
var errorHandler= require('errorhandler');
var routes=require('./routes');
var app = express();
var port = 2000;
// app.all('*/',function(req,res,next){
// res.header("Access-Control-Allow-Origin", "*") // restrict it to the required domain
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
// // Set custom headers for CORS
// res.header('Access-Control-Allow-Headers', 'Content-type,Accept,Authorization');
// if (req.method == 'OPTIONS') {
//   res.status(200).end();
// } else {
//   next();
// }
// });

// app.all('/*', routes.login);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//app.use('/books',router.book);
app.use('/users',routes.user);

// Register


app.use(errorHandler);

app.listen(port,function () {
console.log('Login app is running on port ' + port);
});