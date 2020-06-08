/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
  Fragment, memo,
} from 'react';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import DashboardLayout from 'layouts/DashboardLayout';
import {
  // eslint-disable-next-line import/named
  AuthGuard, GuestGuard, NotFound, LoadingScreen, AuthRoute,
} from 'components';
import { USER_PERMISSIONS } from './constants';

const routesConfig = [
  {
    exact: true,
    path: '/',
    component: () => <Redirect to="/login" />,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/login',
    component: lazy(() => import('routes/Login')),
  },
  {
    path: '/app',
    guard: AuthGuard,
    layout: DashboardLayout,
    routes: [
      {
        exact: true,
        path: '/app',
        component: () => <Redirect to="/app/reports/dashboard" />,
      },
      {
        exact: true,
        path: '/app/reports/dashboard',
        component: lazy(() => import('routes/Dashboard')),
      },
      {
        exact: true,
        path: '/app/customercare',
        component: () => <Redirect to="/app/customercare/search" />,
      },
      {
        exact: true,
        path: '/app/customercare/search',
        permission: USER_PERMISSIONS.SEARCH_CLIENTS,
        component: lazy(() => import('routes/Search')),
      },
      {
        exact: true,
        path: '/app/settings',
        component: () => <Redirect to="/app/settings/permissions" />,
      },
      {
        exact: true,
        path: '/app/settings/permissions',
        component: lazy(() => import('routes/Permissions')),
      },
    ],
  },
  {
    component: () => <NotFound />,
  },
];

const Routes = () => {
  const renderRoutes = routes => (routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={props => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <AuthRoute permission={route.permission}>
                        <Component {...props} />
                      </AuthRoute>
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null);

  return renderRoutes(routesConfig);
};

Routes.displayName = 'Routes';

export default memo(Routes);
