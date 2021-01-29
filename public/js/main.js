var GetInfo = {
  btnLogin: '#btn-login',

  initEvents: function () {
    var _this = this;
    $(_this.btnLogin).click((e) => {
      this._submit(e.target.id);
      console.log('ahihi')
    });
  },

  _submit: function () {
    $.ajax({
      url: '/login',
      type: 'POST',
      success: (data) => { 
        console.log(data); 
        localStorage.setItem('data', data)
        window.location.href = 'http://localhost:8000/'
      },

      error: (error) => { console.log(error); }
    });
  },
}
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
    });
  },
  
  _delete: function (id) {
    var _this = this;
    console.log(_this);
    $.ajax({
      url: '/tasks/' + id,
      type: 'DELETE',
      success: (data) => {
        console.log('check data', data);
      },
      error: (error) => { console.log(error); }
    });
  },
}
GetInfo.initEvents();
CheckTask.initEvents();
DeleteTask.initEvents();

$(document).ready(function(){
  
  $("#collapse").click(() => {
    
    if(this.value){

      $('.gp-add-task').show();
      $('.gp-search-task').hide()
    }else{
      $('.gp-add-task').hide();
      $('.gp-search-task').show()
    }
    this.value = !this.value;
  });
  $('.title').click(() => {
    window.location.href = 'http://localhost:8000/'
  })
});
