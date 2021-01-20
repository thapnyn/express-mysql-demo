function checkTask(id) {
  $.ajax({
    url: '/tasks/' + id,
    type: 'PUT',
    success: (data) => { console.log(data); },
    error: (error) => { console.log(error); }
  });
}