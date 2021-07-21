import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Check that service workers are supported

serviceWorkerRegistration.register();

reportWebVitals();
