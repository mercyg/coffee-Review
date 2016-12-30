var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//var Pictoose = require("pictoose");

var path = require("path");

var port = process.env.PORT || 8000;


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/coffees", require("./routes/coffeeRoutes"))

//var upload = multer({dest: './uploads/', rename: function(fieldname, filename){return filename}})

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/reviews", function(err) {
    if (err) throw err;
    else console.log("Connected to the database")
})

app.listen(port, function() {
    console.log("Listening on port " + port)
})
