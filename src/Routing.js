import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Redirect, Switch, useHistory } from 'react-router-dom';
import { Layout, Menu, Table, Button, Dropdown, Input, Space } from 'antd';
import Loader from './shared/loader/Loader';

const App = lazy(() => import('./components/app/appRouter'));
const Dashboard = lazy(() => import('./components/dashboard/dashboard'));
const Events = lazy(() => import('./components/events/events'))
const ErrorPage = lazy(() => import('./shared/404/error-page'));

const { Content } = Layout;

const Routing = () => {
  const history = useHistory();
  const PublicRoutes = [
                           {
                             exact: true,
                             path: '/',
                             component: () => <Dashboard />,
                             title: 'Dashboard',
                           },
                           {
                             exact: true,
                             path: '/dashboard',
                             component: () => <Dashboard />,
                             title: 'Dashboard',
                           },

                           {
                             exact: true,
                             path: '/events',
                             component: () => <Events />,
                             title: 'Events',
                           },
                           {
                             exact: true,
                             path: '*',
                             component: () => <ErrorPage />,
                           },
                         ].filter(cur => cur);

  return (
    <Suspense className="loader" fallback={<Loader />}>
            <Switch>
              {PublicRoutes.map(route => (
                <Route
                  exact={route.exact !== false}
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              ))}
              <Redirect from="/" to="/404" />
            </Switch>
        </Suspense>
  );
};

export default Routing;
