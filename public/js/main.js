var CheckTask = {
  checkTaskIpt: '.ipt-task-item',

  initEvents: function() {
    var _this = this;
    $(_this.checkTaskIpt).change((e) => {
      this._update(e.target.id);
    });
  },

  _update: function(id) {
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

  initEvents: function() {
    var _this = this;
    $(_this.delTask).click((e) => {
      // let id = e.target.parentNode.firstChild.id;
      this._delete(9);
      console.log('>> delete');
    });
  },

  _delete: function(id) {
    var _this = this;
    console.log($(_this.checkTaskIpt).find('#' + id));
    // $.ajax({
    //   url: '/tasks/' + id,
    //   type: 'DELETE',
    //   success: (data) => {
    //     console.log(data);
    //     // $(_this.checkTaskIpt).remove();
    //     // console.log('>> t', $(_this.checkTaskIpt).remove());
    //   },
    //   error: (error) => { console.log(error); }
    // });
  },
}

CheckTask.initEvents();
DeleteTask.initEvents();