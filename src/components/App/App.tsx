import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history, store } from '../../store/store';
import Articles from '../Articles/Articles';
import PageLayout from '../PageLayout/PageLayout';
import React from 'react';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <PageLayout>
          <Switch>
            <Route component={Articles} exact path="/" />
          </Switch>
        </PageLayout>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
