var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Backbone = require('backbone');
var Parse = require('parse');



var RecipeCardComponent = React.createClass({

render: function(){
  return(
    <div>
        <form className="form-horizontal">
          <div className="form-group form-group-sm">
            <label className="col-sm-2 control-label" for="formGroupInputSmall">Name</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" id="formGroupInputSmall" placeholder="Name" />
            </div>
          </div>
          <div className="form-group form-group-sm">
            <label className="col-sm-2 control-label" for="formGroupInputSmall">Recipe Name</label>
            <div className="col-sm-6">
              <input className="form-control" type="text" id="formGroupInputSmall" placeholder="Recipe Name" />
            </div>
          </div>
        </form>
        <div className='col-sm-12'>
      <textarea className="form-control" rows="3"></textarea>
      </div>
       <form className="form-group">
        Prep Time:
        <input className="form-control" type="text" name="Preptime"/>
        Cook Time:
        <input className="form-control" type="text" name="Cooktime"/>
      </form>

      <form className="form-group">

       <input className="form-control" type="text" name="amount"/>
        <select className="form-control selectpicke">
          <option>oz</option>
          <option>lbs</option>
          <option>cups</option>
        </select>
       <input className="form-control" type="text" name="ingredients"/>
     </form>
    </div>

    );
  }
});

module.exports = RecipeCardComponent;
