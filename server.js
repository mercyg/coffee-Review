var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser")
var mongoose = require("mongoose");
var expressSession = require("express-session");
var hash = require("bcrypt-nodejs");
var path = require("path");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//var passport = require("passport");
//var LocalStrategy = require("passport-local").Strategy;
//var flash = require("connect-flash");

var logger = require("morgan")
var path = require("path");

var port = process.env.PORT || 8000;


//Difine middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(require("express-session") {
    secrect: 'keyboard cat',
    resave;false,
    saveUninitialized: false
})

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));

//configure passport

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use("/coffees", require("./routes/coffeeRoutes"))

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/reviews", function(err) {
    if (err) throw err;
    else console.log("Connected to the database")
})
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.listen(port, function() {
    console.log("Listening on port " + port)
})
