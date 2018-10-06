import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
