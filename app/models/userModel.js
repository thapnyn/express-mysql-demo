'user strict';

var sql = require('./db.js');
//user object constructor
var User = function (user) {
  this.user_name = user.user_name;
  this.pass_word = user.pass_word;
  this.full_name = user.full_name;
  this.tokenJWT = user.tokenJWT;
};

User.getInfo = function (user_name, pass_word, result) {

  sql.query("Select * from users where user_name = ? and pass_word = ?",[user_name,pass_word], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
    
  });
};
module.exports = User;