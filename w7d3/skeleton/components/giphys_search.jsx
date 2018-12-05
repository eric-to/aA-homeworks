import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: 'cute cat' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchTerm = this.state.searchTerm.split(' ').join('+');
    console.log(searchTerm);
    this.props.fetchSearchGiphys(searchTerm);
  }

  render() {
    return (
      <div>
        <form className="search-bar">
          <input placeholder={this.state.searchTerm} onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>Search Giphy</button>
        </form>
        <GiphysIndex giphys={this.props.giphys} />
      </div>
    )
  }
}

export default GiphysSearch
