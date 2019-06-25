// Put any other imports below './custom.scss' so that CSS from
// components takes precedence over customized Bootstrap styles.
import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
