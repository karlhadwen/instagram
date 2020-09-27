import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './helpers/routes';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import Profile from './pages/profile';
import NotFound from './pages/not-found';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/use-auth-listener';

export default function App() {
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
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
