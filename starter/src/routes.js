import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './contexts/AuthContext';

import Login from './pages/Login';
import Users from './pages/Users';

const CustomRoute = ({ isPrivate, ...othersProperties }) => {
  const { authenticated, loading } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login"></Redirect>;
  }

  return <Route {...othersProperties}></Route>;
};

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate={true} exact path="/users" component={Users} />
    </Switch>
  );
}
