import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,combineReducers } from 'redux';
import counterReducer from './reducer/multireducers/counterreducer';
import resultReducer from './reducer//multireducers/result';
import loggedinReducer from './reducer//multireducers/logged';
import { Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.baseURL='http://local.demo1.com/api/';
const RootReducer =combineReducers({
        ctr:counterReducer,
        res:resultReducer,
        login:loggedinReducer
});

const store = createStore(RootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
