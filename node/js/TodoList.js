var React = require('react');
var TodoListItem = require('./TodoListItem');
var itemID = 0;

var TodoList = React.createClass({
	createItem: function(itemText) {
		return (
            <TodoListItem key={itemID++}>{itemText}</TodoListItem>
		);
	},

	render: function() {
		return (
			<ul>{this.props.items.map(this.createItem)}</ul>
		);
	}
});

module.exports = TodoList;
