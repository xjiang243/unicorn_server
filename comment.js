require('mongoose').model('Comment');

var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = {
  createComments: function (req, res) {
    var comment = req.body;
    new Comment({ fullName: comment.fullName, email: comment.email, content: comment.content, 
                  rating: comment.rating, myCheckbox: comment.myCheckbox })
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);
        } else {
          console.log('comment saved');
          res.end();
        }
      });
  }
}