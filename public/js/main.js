var CheckTask = {
  checkTaskIpt: '.ipt-task-item',

  initEvents: function () {
    var _this = this;
    $(_this.checkTaskIpt).change((e) => {
      this._update(e.target.id);
      console.log(e.target.id)
    });
  },

  _update: function (id) {
    $.ajax({
      url: '/tasks/' + id,
      type: 'PUT',
      success: (data) => { console.log(data); },
      error: (error) => { console.log(error); }
    });
  },
}

var DeleteTask = {
  checkTaskIpt: '.ipt-task-item',
  delTask: '.del-task-item',

  initEvents: function () {
    var _this = this;
    $(_this.delTask).click((e) => {
      this._delete(e.target.id);
      $(e.target).parent().remove();
      console.log('>> delete', $(e.target).parent());
    });

  },

  _delete: function (id) {
    var _this = this;
    console.log(_this);
    $.ajax({
      url: '/tasks/' + id,
      type: 'DELETE',
      success: (data) => {
        console.log(data);
        // $(_this.checkTaskIpt).remove();
        // console.log('>> t', $(_this.checkTaskIpt).remove());
      },
      error: (error) => { console.log(error); }
    });
  },
}

CheckTask.initEvents();
DeleteTask.initEvents();