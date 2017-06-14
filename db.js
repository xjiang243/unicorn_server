var mongoose = require("mongoose");
var Comment = new mongoose.Schema({
    
    fullName: {
        type: String
    },
	email: String,
	content: String,
	rating: String,
	myCheckbox: Boolean
});

mongoose.model('Comment',Comment);
mongoose.connect('mongodb://localhost/');

console.log("we are connected");