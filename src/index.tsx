import * as React from 'react';
import App from './App';
import * as ReactDOM from 'react-dom';

const render = (Component) => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

render(App);