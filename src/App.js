import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './helpers/protected-route';
import IsUserLoggedIn from './helpers/is-user-logged-in';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Switch>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.HOME} path={ROUTES.LOGIN}>
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.HOME} path={ROUTES.SIGN_UP}>
              <SignUp />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE}>
              <Profile />
            </Route>
            <ProtectedRoute user={user} path={ROUTES.HOME} exact>
              <Home />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </UserContext.Provider>
  );
}
