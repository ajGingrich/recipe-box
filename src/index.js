var React = require('react');
var ReactDOM = require('react-dom');
var AddRecipe = require('./components/Add.js');
var FoodItem = require('./components/FoodItem.js');

//Check Local Storage
var retrievedData = localStorage.getItem("recipes");

var recipes = [];
var checkLocalStorage = function() {
    if (retrievedData != undefined) {
        recipes = JSON.parse(retrievedData);
    }
    else {
        recipes = [{food: "Pumpkin Pie", ingredients: ["Pumpkin Puree", "Sweetened Condensed Milk", "Pumpkin Pie Spice"]},
            {food: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "(Optional) Meatballs", "Cheese"]},
            {food: "Tacos", ingredients: ["Carne Molida", "Queso", "Lechuga", "Natilla", "Sriracha"]},
            {food: "Hamburgers", ingredients: ["Ground Beef", "Oatmeal", "Egg", "Tomato", "Lettuce"]}];
    }
};
checkLocalStorage();

var RecipeBox = React.createClass({

    getInitialState: function() {
        return {
            activeIndex: null,
            recipes: recipes
        };
    },

    addItem: function() {
        var recipes = this.state.recipes.slice();
        this.setState({
            recipes: recipes
        })
    },

    deleteItem: function() {
        var recipes = this.state.recipes.slice();
        this.setState({
            recipes: recipes
        });
    },

    editItem: function() {
        var recipes = this.state.recipes.slice();
        this.setState({
            recipes: recipes
        });
    },

    handleClick: function(index) {
        this.setState({
            activeIndex: index,
        });
    },

    componentDidUpdate: function() {
        var recipes = this.state.recipes.slice();
        localStorage.setItem("recipes", JSON.stringify(recipes));
    },

    render: function() {

        /*Make Array with all the Ingredients in JSX*/
        var arrIngredient= [];

        for (var k=0; k < this.state.recipes.length; k++) {
            arrIngredient[k] = [];
            for (var i=0; i<this.state.recipes[k].ingredients.length; i++) {
                arrIngredient[k].push(<div><h5>{this.state.recipes[k].ingredients[i]}</h5></div>)
            }
        }

        /*Make Array with all of the Food Items in JSX*/
        var arrFood = [];

        for (var j=0; j <this.state.recipes.length; j++) {
            arrFood.push(
                <FoodItem
                    recipes = {this.state.recipes}
                    name={this.state.recipes[j].food}
                    ingredients = {arrIngredient[j]}
                    index={j}
                    isActive={this.state.activeIndex===j}
                    onClick={this.handleClick}
                    deleteItem={this.deleteItem}
                    editItem={this.editItem}
                />
            );
        }

        return (
            <div className = "col-md-12 box">
                <div className="clearFix"></div>
                {arrFood}
                <AddRecipe
                recipes = {this.state.recipes}
                onClick = {this.addItem}
                />
            </div>

        );
    }

});


ReactDOM.render(<RecipeBox />, document.getElementById('theBox'));
