import { connect } from 'react-redux';
import { searchClients } from '../modules/actions';
import SearchView from '../components/SearchView';

const mapDispatchToProps = { searchClients };

export default connect(
  null,
  mapDispatchToProps
)(SearchView);
