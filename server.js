//Set up Express
let express = require('express');
// let methodOverride = require('method-override');
// let bodyParser = require("body-parser");

//Sets up Express App
let app = express();
let PORT = process.env.PORT || 8080;

//Static directory to be used
// app.use(express.static("app/public"));
// app.use(express.static(path.join(__dirname, "/public"));
app.use(express.static(__dirname+'/public'));
// app.use(express.static(process.cwd() + "/public"));

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Call the method override NPM to mass in a method on the buttons
// app.use(methodOverride("_method"));

//Set Handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
let routes = require("./controllers/burger_controller.js");

app.use("/", routes);

 //Starts the server to begin listening
 app.listen(PORT, function () {
     console.log("App is listening on http://localhost:" + PORT)
 });