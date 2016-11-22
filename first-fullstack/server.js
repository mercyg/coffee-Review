var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
//var multer = require("multer");
var mongoose = require("mongoose");
//var Pictoose = require("pictoose");

var path = require("path");

var port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));
app.use("/coffees", require("./routes/coffeeRoutes"))

//var upload = multer({dest: './uploads/', rename: function(fieldname, filename){return filename}})

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/reviews", function (err) {
    if (err) throw err;
    else console.log("Connected to the database")
})

app.listen(port, function () {
    console.log("Listening on port " + port)
})


//Pictoose.Config('RESOURCE_STORAGE_ROOT', './public/');
//Pictoose.Config('RESOURCE_STORAGE_URL', 'http://127.0.0.1:port/public/');
//Pictoose.Config('RESOURCE_MAIN_URL', 'http://127.0.0.1:port/resources/');
// 
//
// 
//app.get('/resources/:resid', Pictoose.RouteController);