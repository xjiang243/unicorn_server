var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Comment = require('../models/comment');

var commentRouter = express.Router();
commentRouter.use(bodyParser.json());

commentRouter.route('/')
    .get(function(req, res, next){
    Comment.find(req, query).populate('comment.fullName')
                            .exec(function(err, dish){
            if(err) next(err);
            res.json(dish);
        });
    })
    .post(function(req, res, next){
    var comment = req.body;
    new Comment({fullName: comment.fullName, email: comment.email, content: comment.content, 
                rating: comment.rating, myCheckbox: comment.myCheckbox})
                .save(function (err) {
                    if (err) {
                      res.status(504);
                      res.end(err);
                    } else {
                      console.log('comment saved');
                      res.end();
                    }
                });
    });

module.exports = commentRouter;

