var User = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

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

    return (
      <LiveSearch>
        <br/>
        { this.props.users.map(createUser) }
      </LiveSearch>
    );
  },
});

// <LiveSearch users={this.props.users} />
