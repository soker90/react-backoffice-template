import mock from 'utils/mock';

mock.onGet('search').reply(() => new Promise((resolve => {
  setTimeout(() => {
    resolve([200, []]);
  }, 1500);
})));
