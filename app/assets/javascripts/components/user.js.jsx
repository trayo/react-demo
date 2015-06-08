var User = React.createClass({
  render: function() {
    return <div>{this.props.user.name}</div>;
  }
});

var UserList = React.createClass({
  render: function() {
    var createUser = function(user){
      return (
        <div key={user.name + " " + user.id}>
          <User user={user} />
        </div>
      );
    };

    var filterTerm = function(user){
      return user.name;
    };

    var display = function(user) {
      return (
        <div>
          <h2>
            {user.name}<br/>
            by: {user.id}
          </h2>
        </div>
      );
    };

    return (
      <LiveSearch
        library={this.props.users}
        filterTerm={filterTerm}
        display={display}
      />
    );
  },
});

