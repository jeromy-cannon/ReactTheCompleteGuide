import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle={"Jeromy's React App"} />, document.getElementById('root'));
registerServiceWorker();
