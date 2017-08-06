var React = require('react');

var AddRecipe = React.createClass({

    addItem: function() {
        ///Get information from Modal
        var arrNewRecipeTitle = document.getElementById('newRecipeTitle').value;
        var stringNewIngredients = document.getElementById('newIngredients').value;
        var arrNewIngredients = stringNewIngredients.split(',');

        ///Push it to recipes and update
        this.props.onClick(
            this.props.recipes.push({food: arrNewRecipeTitle, ingredients: arrNewIngredients})
        );
    },

    render: function() {
        return (
            <div>
                <button type="button" className="btn btn-primary addRecipe" data-toggle="modal" data-target="#addModal">
                Add Recipe
            </button>

                <div className="modal fade" id="addModal" tabIndex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h3 className="modal-title modalTitle">Add a Recipe</h3>
                            </div>
                            <div className="modal-body">
                                <p className="modalLabel">Recipe</p>
                                <form className="form-group">
                                    <input type="text" className="form-control" id="newRecipeTitle" name="newRecipeTitle" placeholder="Recipe Name" />
                                </form>
                                <p className="modalLabel">Ingredients</p>
                                <form className="form-group">
                                    <textarea className="form-control" rows="2" id="newIngredients" name="newIngredients" placeholder="Enter Ingredients Separated By Commas" />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.addItem} data-dismiss="modal" >Save changes</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

      );
    }

});

module.exports = AddRecipe;