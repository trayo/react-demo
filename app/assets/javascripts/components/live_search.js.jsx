var LiveSearch = React.createClass({
  componentDidMount: function() {
    this.setState({ users: this.props.children[1] });
  },

  getInitialState: function() {
    return { users: [], searchString: '' };
  },

  handleChange: function(e) {
    this.setState({ searchString: e.target.value });
  },

  render: function() {
    var searchString = this.state.searchString.trim().toLowerCase(),
        users = this.state.users;

    if (searchString.length > 0) {
      users = users.filter(function(u) {
        return u.key.toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="Type here" />
        { users }
      </div>
    );
  }
});

