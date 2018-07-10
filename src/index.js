import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,combineReducers } from 'redux';
import counterReducer from './reducer/multireducers/counterreducer';
import resultReducer from './reducer//multireducers/result';
import { Provider } from 'react-redux';
import axios from 'axios';
axios.defaults.baseURL='http://local.demo1.com/api/';
const RootReducer =combineReducers({
        ctr:counterReducer,
        res:resultReducer
});

const store = createStore(RootReducer );
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
