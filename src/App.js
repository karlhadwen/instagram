import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProtectedRoute } from './helpers/routes';
import { Home, Login, SignUp, Profile } from './pages';
import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';

export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.PROFILE}>
          <Profile />
        </Route>
        <ProtectedRoute user={user} path={ROUTES.HOME} exact>
          <Home />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}
