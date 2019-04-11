import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import createSagaMiddleware from 'redux-saga';

import theme from './config/theme';
import mySaga from './config/sagas';
import * as reducers from './config/reducers';
import routes from './config/routes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

const render = (RootApp) => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <RootApp />
      </Provider>
    </MuiThemeProvider>
    ,
    document.getElementById('mount'),
  );
};

render(routes);


require('./styles/style.scss');
