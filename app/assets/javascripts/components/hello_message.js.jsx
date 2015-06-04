var HelloMessage = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <h2>hello {this.props.user.name}</h2>
    );
  }
});
