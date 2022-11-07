var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Project = require('../models/project');
var Team = require('../models/team');
var User = require('../models/user');
var Task= require('../Models/task')
router.use(express.json());


var db = "mongodb://localhost:27017/PMS";
mongoose.connect(db, { useNewUrlParser: true }, function(err) {
    if (err) {
        console.error('Error! ' + err);
    } else {
        console.log('Connected to mongodb');
    }
});



// POST /task
router.post('/', function(req, res) {
    var task = new Task(req.body);
    
    task.save(function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(task);
        }
    });
});


// PUT /tasks/:id
router.put('/:id', function(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, task) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(task);
        }
    });
});


// DELETE /tasks/:id
router.delete('/:id', function(req, res) {
    Task.findByIdAndRemove(req.params.id, function(err, task) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(task);
        }
    });
});



// GET /tasks
router.get('/', function(req, res) {
    Task.find({}, function(err, task) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(task);
        }
    });
});


//PUT/:taskid/:userid to Assign task to user

router.put('/:taskid/:userid', function(req, res) {
    Task.findByIdAndUpdate(req.params.taskid, {assignedTo:req.params.userid}, function(err, task) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(task);
            
        }
    });
});


router.put('/status/:taskid', function(req, res) {
    Task.findByIdAndUpdate(req.params.taskid,req.body, {new: true},  function(err, task) {
        if (err) {
            res.status(500).send(err);
        } else {
           res.json(task);
        console.log(task);
            
        }
    });
});



// {status:"In-Progress"},








module.exports=router;