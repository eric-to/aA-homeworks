import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => ({
  giphys: state.giphys
});

// put thunk action creators here
const mapDispatchToProps = dispatch => {
  return { fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);