var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');
// handleClick: function(e){
//   e.preventDefault();
//   Backbone.history.navigate('menu', {trigger: true});
// },

Parse.initialize("tiygvl");
Parse.serverURL = 'http://tiny-little-server.herokuapp.com/';


var LoginComponent = React.createClass({
handleSignUp: function(){
  console.log('working');
},
handleSignUp: function(event){
  console.log('hello');
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
},
handleSignIn: function(event){
  console.log("happy");
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
    Backbone.history.navigate('recipeCard', {trigger: true})
},
  render: function(){
    return(
          <div className="wrapper-1">
            <div className="row">
             <div className="col-sm-6">
               <form onSubmit={this.handleSignIn} id="login" className="form-signin">
                 <h2 className="form-signin-heading">Please Login</h2>
                 <input id="email-login" type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
                 <input id="password-login" type="password" className="form-control" name="password" placeholder="Password" required=""/>
                 <button className="btn btn-lg btn-primary btn-block" type="submit">Login!</button>
              </form>
           </div>
           <div className="wrapper-2">
             <div className="col-sm-6">
             <form onSubmit={this.handleSignUp} id="signup" className="form-signin">
               <h2 className="form-signin-heading">No Account? Please Sign Up!</h2>
               <input id='email' type="text" className="form-control" name="email" placeholder="Email Address" required="" autofocus="" />
               <input id="password" type="password" className="form-control" name="password" placeholder="Password" required=""/>
               <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up!</button>
             </form>
           </div>
         </div>
       </div>
      </div>
    );
  }
})



module.exports = LoginComponent;
