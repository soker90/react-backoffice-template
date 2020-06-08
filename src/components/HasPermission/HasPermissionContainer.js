import { connect } from 'react-redux';
import HasPermissionView from './HasPermissionView';

const mapStateToProps = ({ account }) => ({
  permissions: account.userPermissions,
});

export default connect(mapStateToProps)(HasPermissionView);
