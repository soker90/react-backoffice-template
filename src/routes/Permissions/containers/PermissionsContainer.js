import { connect } from 'react-redux';
import PermissionsView from '../components/PermissionsView';

const mapStateToProps = ({ account }) => ({
  permissions: account.userPermissions,
  userRole: account.user.role,
});

export default connect(
  mapStateToProps,
)(PermissionsView);
