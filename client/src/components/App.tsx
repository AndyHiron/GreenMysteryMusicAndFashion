import React, { lazy, Suspense } from 'react';
import { Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { ToastContainer, Slide } from 'react-toastify';

import { Loading, PublicRoute, PrivateRoute } from 'common/general';
import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from 'styles';

const Dashboard = lazy(() => import('pages/Dashboard'));
const UserManagement = lazy(() => import('pages/UserManagement'));
const Login = lazy(() => import('pages/authentication/Login'));
const ResetPassword = lazy(() => import('pages/authentication/ResetPassword'));
const ConfirmPassword = lazy(() => import('pages/authentication/ConfirmPassword'));
const ConfirmSignup = lazy(() => import('pages/authentication/ConfirmSignup'));

const App: React.FC<RouteComponentProps> = () => (
  <>
    <GlobalStyle />
    <ToastContainer
      position="bottom-center"
      autoClose={5000}
      hideProgressBar
      pauseOnHover
      draggable={false}
      transition={Slide}
    />
    <Suspense fallback={<Loading position="absolute" />}>
      <Switch>
        <PrivateRoute path="/" component={Dashboard} exact />
        <PrivateRoute path="/users" component={UserManagement} />

        <PublicRoute path="/login" component={Login} exact />
        <PublicRoute path="/reset-password" component={ResetPassword} exact />
        <PublicRoute path="/confirm-password" component={ConfirmPassword} exact />
        <PublicRoute path="/confirm-signup" component={ConfirmSignup} exact />
      </Switch>
    </Suspense>
  </>
);

export default withRouter(App);
