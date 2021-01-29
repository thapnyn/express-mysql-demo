'use strict';
module.exports = function (app) {

  var todoList = require('../controllers/todoListController');
  var user = require('../controllers/userController');

  app.route('/login')
    .post(user.get_info);

  app.route('/search')
    .post(todoList.search_by_task_name);

  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/')
    .get(todoList.show_list_all_tasks);
};