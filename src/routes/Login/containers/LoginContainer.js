import { connect } from 'react-redux';
import { login, logout } from 'actions/auth';
import LoginView from '../components';

const mapStateToProps = ({ account, common: { offline } }) => ({
  loginError: account?.loginError,
  offline,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView);
