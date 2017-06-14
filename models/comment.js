var mongoose = require("mongoose");
var Schcema = mongoose.Schema;

var comment = new Schcema({
    fullName: String,
    email: String,
    content: String,
    rating: String,
    myCheckbox: Boolean
});

module.exports = mongoose.model("Comment", comment);