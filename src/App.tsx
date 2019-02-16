// ./src/index.js
import * as React from 'react';

import { hot } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './containers/Main';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Main />
            </Router>
        </Provider>
    );
};

export default hot(module)(App);