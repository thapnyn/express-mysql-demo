'use strict';

var Task = require('../models/todoModel.js');

exports.show_list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {
    if (err)
      res.send(err);
    res.render('index', {tasks: task});
  });
};

exports.list_all_tasks = function(req, res) {
  Task.getAllTask(function(err, task) {
    if (err)
      res.send(err);
    res.send(task);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = {title: req.body.task, status: 1};

  //handles null error
  if(!new_task.title || !new_task.status){
    res.status(400).send({ error:true, message: 'Please provide task/status' });
  } else {
    Task.createTask(new_task, function(err, task) {
      if (err)
        res.send(err);
      // res.json(task);
      res.redirect('/');
    });
  }
};


exports.read_a_task = function(req, res) {
  Task.getTaskById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.updateById(req.params.taskId, new Task(req.body), function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully updated' });
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};