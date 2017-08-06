var React = require('react');
var DeleteRecipe = require('./Delete.js');
var EditRecipe = require('./Edit.js');

var FoodItem = React.createClass({
    getInitialState: function() {
        return {
            editingID: null
        };
    },

    handleClick: function() {
        //Close recipe if clicked on twice
        if (this.props.isActive) {
            this.props.onClick(null);
        }
        else {
            this.props.onClick(this.props.index);
        }
    },

    render: function() {
        return (
            <div>
                <div className = "col-md-12 recipeContainer" onClick={this.handleClick}>
                    <h4>{this.props.name}</h4>
                </div>
                <div className={this.props.isActive ? 'currentIngredient' : 'ingredient'}>
                    <div><h4 className = "ingredientTitle">Ingredients</h4></div>
                    <div className="ingredientList">{this.props.ingredients}</div>
                    <div className="row">
                        <div className = "col-xs-6">
                            <DeleteRecipe recipes = {this.props.recipes} index={this.props.index} onClick={this.props.deleteItem}/>
                        </div>
                        <div className = "col-xs-6">
                            <EditRecipe recipes = {this.props.recipes} index={this.props.index} onClick={this.props.editItem}/>
                        </div>
                    </div>
                </div>
            </div>

      );
    }

});

module.exports = FoodItem;