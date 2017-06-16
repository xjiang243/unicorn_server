var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var Comment = require('../models/comment');

var commentRouter = express.Router();
commentRouter.use(bodyParser.json());

commentRouter.route('/')
    .get(function(req, res, next){
    Comment.find({}, function(err, comments){
        if(err) next(err);
        res.json(comments);
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
    })
    .delete(function(req, res, next){
    Comment.remove({}, function(err, resp){
      if(err) throw err;
        res.json(resp);
    })
    });

commentRouter.route('/:id')
    .get(function(req, res, next){
        console.log(req.params.id);
        var id = req.params.id;
        Comment.find({_id: id}, function(err, resp){
            if(err) throw err;
            res.json(resp);
        })
    })
    .delete(function(req, res, next){
        console.log(req.params.id);
        var id = req.params.id;
        Comment.remove({_id: id}, function(err, resp){
            if(err) throw err;
            res.json(resp);
        })
    });

module.exports = commentRouter;

