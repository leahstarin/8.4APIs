var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

// var menu = require('../menu-items.js');
var models = require('./models');

// var RecipeCardCollection = new RecipeCardCollection();

var LoginComponent = require('./../components/index.jsx');
var RecipeCardComponent = require('./../components/RecipeCard.jsx');


var Router = Backbone.Router.extend({
  routes: {
  "" : "index",
  "recipeCard": "recipeCard"
},

index: function(){
  ReactDOM.render(
    React.createElement(LoginComponent), document.getElementById('app')
  );
},


recipeCard: function(){
  ReactDOM.render(
    React.createElement(RecipeCardComponent), document.getElementById('app')
  );
}
});

module.exports = Router;
