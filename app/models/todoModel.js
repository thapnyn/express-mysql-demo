'user strict';

var sql = require('./db.js');

//Task object constructor
var Task = function(task){
  this.title = task.title;
  this.status = task.status;
  this.created_at = new Date();
};

Task.createTask = function (newTask, result) {
  sql.query("INSERT INTO tasks set ? ", newTask, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
    console.log(this.sql);
  });
  
};

Task.getTaskById = function (taskId, id_user, result) {
  sql.query("Select * from tasks where id = ? and id_user = ? ", [taskId,id_user], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
    
  });
};

Task.getAllTask = function (id_user, result) {
  sql.query("Select * from tasks where id_user = ? ", id_user, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Task.updateById = function(id, result) {
  sql.query("UPDATE tasks SET status = CASE WHEN status = 1 THEN 0 ELSE 1 END WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Task.remove = function(id, result) {
  sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;