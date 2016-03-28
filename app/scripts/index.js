var $ = require('jquery');
var Parse = require('parse');

$(function(){
  Parse.initialize("tiygvl");
  Parse.serverURL = 'http://tiny-parse-server.herokuapp.com/';

  $('#signup').on('submit', function(event){
      event.preventDefault();

      var user = new Parse.User();
      user.set({'username': $('#email').val(), 'password': $('#password').val()});

      user.signUp(null, {
        'success': function(results){
          console.log("results: ", results);
        },
        'error': function(user, error){
          console.log(user, error);
        }
      });
    });

    $('#login').on('submit', function(event){
      event.preventDefault();

      Parse.User
        .logIn($('#email-login').val(), $('#password-login').val(), {
          success: function(user) {
            console.log(user);
          },
          error: function(user, error) {
            // The login failed. Check error to see why.
          }
        });
    });
    });
