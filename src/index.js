import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './containers/appContainer';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/index';

/* Enable redux dev tools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware
        )
));

ReactDOM.render(<Provider store={store}><AppContainer /></Provider>, document.getElementById('root'));
