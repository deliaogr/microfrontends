import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if in dev and isolation we call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// if running through container we export mount
export { mount };
