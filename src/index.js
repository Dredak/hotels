import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './state/reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </ Provider>,
    document.getElementById('root')); 