import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { Home, Login, SignUp } from './pages';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path={ROUTES.LOGIN}
        >
          <Login />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.HOME}
          path={ROUTES.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.HOME}>
          <Home />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
