var express = require('express');
var app = express();

//Number of the port
var port = process.env.PORT || 3000;

// Loads all static files inside the directory
app.use(express.static('src/lib'));
app.use(express.static('src/app/views'));

app.get('/', function (req, res) {
    res.render('index');
});

//Sets the port the application will listen
app.listen(port, function (error) {
    console.log('Server running on port ', port);
});


