import React from 'react';
import PropTypes from 'prop-types';

import '../assets/stylesheets/stylesheet.css';
var existText = document.getElementById('originalText').innerHTML;


var App = React.createClass({
  getInitialState: function () {
    return {
      userInput: existText
    };
  },

  handleUserInput: function (e) {
    this.setState({
      userInput: e.target.value
    });
  },
  /*componentDidUpdate: function() {
    count++;
    console.log(count);
  },*/
  rawMarkup: function() {
   return {
      __html: marked(this.state.userInput, {sanitize: true})
      };
   },

  render: function() {
    return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <textarea className="form-control" onChange={this.handleUserInput} value={this.state.userInput} rows="25" />
            </div>
            <div className="col-md-6">
              <div dangerouslySetInnerHTML={this.rawMarkup()}></div>
            </div>
          </div>
        </div>
    );
  }
});

export default App;