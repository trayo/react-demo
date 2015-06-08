var User = React.createClass({
  render: function() {
    return (
      <div>
        <h2>
          {this.props.user.name}<br/>
          by: {this.props.user.id}
        </h2>
      </div>
    );
  }
});

var UserList = React.createClass({
  render: function() {
    var createUser = function(user){
      return <User user={user} />;
    };

    var filterTerm = function(user){
      return user.name;
    };

    return (
      <LiveSearch
        library={this.props.users}
        filterTerm={filterTerm}
        display={createUser}
      />
    );
  },
});

