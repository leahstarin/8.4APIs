var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');



var RecipeCardComponent = React.createClass({
handleSubmit: function(e){
  e.preventDefault();
  var RecipeInfo = Parse.Object.extend("recipes");
  var info = new RecipeInfo();
  var name = $("#name").val();
  var recipename = $("#recipename").val();
  var preptime = $("#preptime").val();
  var cooktime = $("#cooktime").val();
  info.set({
    "name": name,
    "recipename": recipename,
    "preptime": preptime,
    "cooktime": cooktime
  });

  info.save(null, {
    success: function(info){
      console.log(info.id);

    },
    error: function(error) {
      console.log(error);
    }
  });
},
render: function(){
  return(
    <div>
        <form className="form-horizontal">
          <div className="form-group form-group-sm">
            <label className="col-sm-2 control-label" for="formGroupInputSmall">Name</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" id="name" placeholder="Name" />
            </div>
          </div>
          <div className="form-group form-group-sm">
            <label className="col-sm-2 control-label" for="formGroupInputSmall">Recipe Name</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" id="recipename" placeholder="Recipe Name" />
            </div>
          </div>
        </form>
        <div className='col-sm-12'>
      <textarea id="directions" className="form-control" rows="3"></textarea>
      </div>
       <form className="form-group">
        Prep Time:
        <input id='preptime' className="form-control" type="text" name="Preptime"/>
        Cook Time:
        <input id="cooktime" className="form-control" type="text" name="Cooktime"/>
      </form>

      <form className="form-group">

       <input id='amount' className="form-control" type="text" name="amount"/>
        <select className="form-control selectpicke">
          <option>oz</option>
          <option>lbs</option>
          <option>cups</option>
        </select>
       <input id="ingredients"className="form-control" type="text" name="ingredients"/>
     </form>
     <button onClick={this.handleSubmit}className='btn btn-success'>Add Recipe</button>
    </div>

    );
  }
});

module.exports = RecipeCardComponent;
