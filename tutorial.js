var React = require('react');
var people = [];

React.createClass({
  render: function() {
    return {
      <h1>Hello from component</h1>
    }
  }
});

React.render(<App/>, document.body);
