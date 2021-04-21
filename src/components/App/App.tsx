import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { history, store } from '../../store/store';
import PageLayout from '../PageLayout/PageLayout';
import React from 'react';
import Test from '../Test/Test';
import TestNew from '../TestNew/TestNew';

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <PageLayout>
          <Switch>
            <Route component={Test} exact path="/" />
            <Route component={TestNew} path="/test-new" />
          </Switch>
        </PageLayout>
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default App;
