import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { BCT_TOKEN } from '../config';

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) onLogout();
        }

        return Promise.reject(error);
      }
    );
  };

  handleAuthentication() {
    const accessToken = this.getAccessToken();

    if (!accessToken) return;


    if (this.isValidToken(accessToken)) this.setSession(accessToken);
    else this.setSession(null);
  }

  loginWithUsernameAndPassword = (username, password) => new Promise((resolve, reject) => {
    axios.post('/api/account/login', { username, password })
      .then(response => {
        if (response.data.user) {
          this.setSession(response.data.accessToken);
          resolve({
            user: response.data.user,
            permissions: response.data.permissions,
          });
        } else reject(response.data.error);
      })
      .catch(error => {
        reject(error);
      });
  })

  loginInWithToken = () => new Promise((resolve, reject) => {
    axios.get('/api/account/me')
      .then(response => {
        if (response.data.user) {
          resolve({
            user: response.data.user,
            permissions: response.data.permissions,
          });
        } else reject(response.data.error);
      })
      .catch(error => {
        reject(error);
      });
  })

  logout = () => {
    this.setSession(null);
  }

  setSession = accessToken => {
    if (accessToken) {
      localStorage.setItem(BCT_TOKEN, accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem(BCT_TOKEN);
      delete axios.defaults.headers.common.Authorization;
    }
  }

  getAccessToken = () => localStorage.getItem(BCT_TOKEN);

  isValidToken = accessToken => {
    if (!accessToken) return false;


    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  }

  isAuthenticated = () => !!this.getAccessToken()
}

const authService = new AuthService();

export default authService;
