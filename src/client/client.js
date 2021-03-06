import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './Routes';
import { combinedReducers } from './reducers';
import { renderRoutes } from 'react-router-config';
import {promiseMiddleware} from "../helper/middleware";


const axiosInstance = axios.create({
    baseURL: 'https://acoustic-api.herokuapp.com'
});

const store = createStore(
    combinedReducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance), promiseMiddleware)
);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
