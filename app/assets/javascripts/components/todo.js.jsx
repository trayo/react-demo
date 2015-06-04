var TodoList = React.createClass({
  render: function() {
    var createItem = function(body, index) {
      return <li key={index + body}>{index+1}: {body}</li>;
    };
    return <ul>{this.props.posts.map(createItem)}</ul>;
  }
});

var Todo = React.createClass({
  getInitialState: function() {
    return {posts: [], text: ''};
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var nextPosts = this.state.posts.concat([this.state.text]);
    var nextText = '';
    this.setState({posts: nextPosts, text: nextText});
  },

  propTypes: {
    index: React.PropTypes.node,
    body: React.PropTypes.string
  },

  render: function() {
    return (
      <div>
      <TodoList posts={this.state.posts} />
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.onChange} value={this.state.text} />
      <button>{'Add #' + (this.state.posts.length + 1)}</button>
      </form>
      </div>
    );
  }

});
