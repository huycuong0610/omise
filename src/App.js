import React, { Component } from 'react';
import Home from './containers/Home';
import { Route, Switch, withRouter } from 'react-router-dom';
import Templates from './components/Templates/Templates';

class App extends Component{
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    );
    return (
      <Templates>
        {routes}
      </Templates>
    );
  }
};

export default withRouter(App);
