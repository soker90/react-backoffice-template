import 'react-perfect-scrollbar/dist/css/styles.css';
import 'nprogress/nprogress.css';
// import 'mixins/chartjs';
import 'moment/locale/es';
/** TODO: Quitar mock al usar un proyecto *  real */
import 'mock';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import { SettingsProvider } from 'context/SettingsContext';
import { configureStore } from 'store';
import { restoreSettings } from 'utils/settings';
import App from 'App';
import { newVersionAvailable, swReady } from './utils/updates';

const store = configureStore();
const settings = restoreSettings();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <App />
    </SettingsProvider>
  </Provider>,
  document.getElementById('root'),
);

// ========================================================
// Configure service worker
// ========================================================
const config = {
  onUpdate: () => newVersionAvailable(store.dispatch),
  onReady: () => swReady(store.dispatch),
};

serviceWorker.register(config);

// serviceWorker.unregister();
