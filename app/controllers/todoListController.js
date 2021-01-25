'use strict';

var Task = require('../models/todoModel.js');

exports.show_list_all_tasks = function (req, res) {
  Task.getAllTask(function (err, tasks) {
    if (err)
      res.send(err);
    res.render('index', { tasks: tasks });

  });
};
exports.search_by_task_name = function (req, res) {
  Task.getAllTask(function (err, tasks) {
    var search_task = req.body.searchTask
    // console.log(search_task);
    if (err)
      res.send(err);
    else {
      const result = tasks.filter(task => task.title.includes(search_task.toLowerCase()));
      // console.log(tasks)
      // console.log(result)
      if (result.length == 0) {
        console.log('ahihi')
        res.redirect('/')
      } else {
        res.render('index', { tasks: result });
        console.log('result', result)
        // res.redirect('/');
      }

    }
  })
};

exports.list_all_tasks = function (req, res) {
  Task.getAllTask(function (err, tasks) {
    if (err)
      res.send(err);
    res.send(tasks);
  });
};


exports.create_a_task = function (req, res) {
  var new_task = { title: req.body.task, status: 1 };

  //handles null error
  if (!new_task.title || !new_task.status) {
    res.status(400).send({ error: true, message: 'Please provide task/status' });
  } else {
    Task.createTask(new_task, function (err, task) {
      if (err)
        res.send(err);
      // res.json(task);
      res.redirect('/');
    });
  }
};


exports.read_a_task = function (req, res) {
  Task.getTaskById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function (req, res) {
  Task.updateById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully updated' });
  });
};


exports.delete_a_task = function (req, res) {
  Task.remove(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};