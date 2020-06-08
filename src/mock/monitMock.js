import mock from 'utils/mock';

mock.onGet('/monit/health').reply(() => [200, 'OK']);
