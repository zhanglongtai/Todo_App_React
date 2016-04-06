var React = require('react');
var ReactDOM = require('react-dom');

var TodoForm = React.createClass({
	getInitialState: function() {
		return {item: ""};
	},
	handleSubmit: function(event) {
		event.preventDefault();
		this.props.onFormSubmit(this.state.item);
		this.setState({item: ""});
		ReactDOM.findDOMNode(this.refs.item).focus();
		return;
	},
	onChange: function(event) {
		this.setState({item: event.target.value});
	},
	render: function() {
		return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="item" onChange={this.onChange} value={this.state.item}/>
                <input type="submit" value="Add"/>
            </form>
		)
	}
});

module.exports = TodoForm;