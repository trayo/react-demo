var User = React.createClass({
  getInitialState: function() {
    return {
      user: this.props.user,
      name: this.props.user.name,
      isEditing: true,
    };
  },

  handleChange: function(e) {
    this.setState({name: e.target.value});
  },

  flipEditing: function() {
    this.setState({isEditing: !this.state.isEditing});
  },

  handleSubmit: function() {
    var newName = this.refs.name.getDOMNode().value.trim();
    var userID = this.state.user.id;

    $.ajax({
      url: "/users/" + userID + ".json",
      dataType: 'json',
      type: 'PUT',
      data: {"id": userID, "name": newName},
    });

    this.flipEditing();
  },

  render: function() {
    return (
      <div>
        <h2 hidden={!this.state.isEditing}> {this.state.name} </h2>
        <div hidden={this.state.isEditing}>
          <input type="text" onChange={this.handleChange} value={this.state.name} ref="name" />
          <button onClick={this.handleSubmit}>Save</button>
        </div>
        by: {this.state.user.id} <br/>
        <button onClick={this.flipEditing}>Edit User</button> <br/>
      </div>
    );
  }
});

var UserList = React.createClass({
  getInitialState: function() {
    return {users: this.props.users};
  },

  render: function() {
    var createUser = function(user){
      return <User user={user} />;
    };

    var filterTerm = function(user){
      return user.name;
    };

    return (
      <LiveSearch
        library={this.state.users}
        filterTerm={filterTerm}
        display={createUser}
      />
    );
  },
});

