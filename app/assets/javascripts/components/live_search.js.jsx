var LiveSearch = React.createClass({

  getInitialState: function() {
    return { searchString: '' };
  },

  handleChange: function(e) {
    this.setState({ searchString: e.target.value });
  },

  render: function() {
    var searchString = this.state.searchString.trim().toLowerCase(),
        library = this.props.library,
        filterTerm = this.props.filterTerm,
        display = this.props.display;

    if (searchString.length > 0) {
      library = library.filter(function(l) {
        return filterTerm(l).toLowerCase().match( searchString );
      });
    }

    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Type here"
        />
        <ul>
          { library.map(function(l){
            return (
              <div key={ l.id }>
                { display(l) }
              </div>
            );
          }) }
        </ul>
      </div>
    );
  }
});

