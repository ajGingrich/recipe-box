var React = require('react');

var EditRecipe = React.createClass({

    editItem: function() {
        ///Get information from Modal
        var editRecipeTitle = document.getElementById('editTitle' + this.props.index).value;
        var stringEditIngredients = document.getElementById('editIngredients' + this.props.index).value;
        var arrEditIngredients = stringEditIngredients.split(',');

        ///Add changes to recipes and update
        this.props.onClick(
            this.props.recipes[this.props.index] = {food: editRecipeTitle, ingredients: arrEditIngredients}
        );
    },

    render: function() {
        ///Links for each Modal
        var modalTarget = "#" + this.props.index.toString();
        var modalId = this.props.index.toString();
        var editTitle = "editTitle" + this.props.index.toString();
        var editIngredients = "editIngredients" + this.props.index.toString();

        ///String for each list of ingredients
        var strIngredients = this.props.recipes[this.props.index].ingredients.join(', ');

        return (
            <div>
                <button type="button" id='btnEdit' className="btn btn-default" data-toggle="modal" data-target={modalTarget}>
                    Edit
                </button>

                <div className="modal fade" id={modalId} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                                <h4 className="modal-title modalTitle">Edit Recipe</h4>
                            </div>
                            <div className="modal-body">
                                <p className="modalLabel">Recipe</p>
                                <form className="form-group">
                                    <input type="text" className="form-control" id={editTitle} name="editRecipeTitle"
                                    defaultValue={this.props.recipes[this.props.index].food}
                                    />
                                </form>
                                <p className="modalLabel">Ingredients</p>
                                <form className="form-group">
                                    <textarea className="form-control" rows="2" id={editIngredients} name="newIngredients"
                                    defaultValue={strIngredients}
                                    />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.editItem}>Save changes</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
      );
    }

});

module.exports = EditRecipe;