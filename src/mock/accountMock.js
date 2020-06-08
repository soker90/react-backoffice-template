import jwt from 'jsonwebtoken';
import mock from 'utils/mock';

const JWT_SECRET = 'secret';
const JWT_EXPIRES_IN = '2 days';

const db = {
  user: {
    id: '5e86809283e28b96d2d38537',
    username: 'admin',
    password: 'admin',
    firstName: 'Usuario',
    lastName: 'Administrador',
    role: 'admin',
  },
  permissions: [
    'SEARCH_CLIENTS',
  ],
};

mock.onPost('/api/account/login')
  .reply(config => {
    const { username, password } = JSON.parse(config.data);

    if (username !== 'admin' || password !== 'admin') return [400, { message: 'Usuario o contraseña incorrecta' }];


    const { user, permissions } = db;

    const accessToken = jwt.sign(
      { id: user.id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return [200, {
      user,
      permissions,
      accessToken,
    }];
  });

mock.onGet('/api/account/me')
  .reply(() => {
    const { user, permissions } = db;

    const accessToken = jwt.sign(
      { id: user.id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );

    return [200, {
      user,
      permissions,
      accessToken,
    }];
  });
