import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as ROUTES from "./constants/routes";
import { IsUserRedirecct, ProtectedRoute } from './helpers/Routes';
import { useAuthListener } from './hooks';
import { Browse, Home, Signin, Signup } from './pages';

export function App() {
    const { user } = useAuthListener();

  return (
    <Router>
        <Switch>
            <IsUserRedirecct 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.SIGN_IN}
            >
                <Signin />
            </IsUserRedirecct>
            <IsUserRedirecct 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.SIGN_UP}
            >
                <Signup />
            </IsUserRedirecct>
            <ProtectedRoute 
                user={user} 
                path={ROUTES.BROWSE}
            >
                <Browse />
            </ProtectedRoute>
            <IsUserRedirecct 
                user={user} 
                loggedInPath={ROUTES.BROWSE} 
                path={ROUTES.HOME}
            >
                <Home />
            </IsUserRedirecct>
        </Switch>
    </Router>
  );
}
