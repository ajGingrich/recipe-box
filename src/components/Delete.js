var React = require('react');

var DeleteRecipe = React.createClass({

    deleteItem: function() {
        /*Delete Indexed recipe*/
        this.props.onClick(
            this.props.recipes.splice(this.props.index, 1)
        );

    },
    render: function() {
        return (
            <div>
                <button className="btn btn-danger" id='btnDelete' onClick={this.deleteItem}>Delete</button>
            </div>
      );
    }

});

module.exports = DeleteRecipe;