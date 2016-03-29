var Backbone = require('backbone');


var RecipeCard = Backbone.Model.extend({
 idAttribute: 'cid'
});

var RecipeCardCollection = Backbone.Collection.extend({
  model: RecipeCard,
});

module.exports = {
  "RecipeCard" : RecipeCard,
  "RecipeCollection" : RecipeCardCollection

}
