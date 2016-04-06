var React = require('react');
var TodoBanner = require('./TodoBanner');
var TodoList = require('./TodoList');
var TodoForm = require('./TodoForm');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {items: []};
	},

	updateItems: function(newItem) {
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},

	render: function() {
        return (
            <div>
                <TodoBanner/>
                <TodoList items={this.state.items}/>
                <TodoForm onFormSubmit={this.updateItems}/>
            </div>
        );
    }
});

module.exports = TodoApp;