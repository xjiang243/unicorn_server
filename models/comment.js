var mongoose = require("mongoose");
var Schcema = mongoose.Schema;

var comment = new Schcema({
    fullName: String,
    email: String,
    content: String,
    rating: Number,
    myCheckbox: Boolean,
    time: String
});

module.exports = mongoose.model("Comment", comment);