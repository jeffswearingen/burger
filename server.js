// Eat-Da-Burger application

// require npm packages
var app = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

// serve the static css file from the public directory
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

// set default handlebars layout to main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(port, function() {
	console.log("Listening on PORT " + PORT);
});
