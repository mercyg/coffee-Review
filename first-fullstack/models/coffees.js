var mongoose = require("mongoose");
//var Pictoose = require("pictoose")

var coffeeReview = new mongoose.Schema({
    image: String,
    coffeeName: String,
    productBy: String,
    roast: String,
    gride: String,
    allRating: [Number],
    rating: Number
})

coffeeReview.pre("save", function (next) {
    var sum = 0;
    for (var i = 0; i < this.allRating.length; i++) {
        sum += this.allRating[i];
    }
    this.rating = sum / this.allRating.length;
    next();
});

//coffeeReview.plugin(Pictoose.Plugin, ['thumbnail','brand']);


module.exports = mongoose.model("Coffee", coffeeReview);
