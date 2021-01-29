'use strict';

var User = require('../models/userModel.js');

exports.get_info = function (req, res) {
    var userName = req.body.userName;
    var passWord = req.body.passWord;
    User.getInfo(userName ,passWord, function (err, result) {
        
        if(result.length == 0){
            res.render('login');
        }
        console.log('result', result)
    });
};