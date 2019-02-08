import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Components/App';
import { unregister } from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// needed because of following issue with chrome
// https://github.com/gatsbyjs/gatsby/issues/10899
// fix https://stackoverflow.com/questions/49604821/cache-busting-with-create-react-app
unregister();