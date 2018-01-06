import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Create Store
const store = createStore(reducer);

// Connect store with App
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
