import './index.css';

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from './app/reducers';

import App from './app/components/App';
import Articles from './app/components/articles';
import Article from "./app/components/article";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Route path="/" component={Articles} />
            </Route>
            <Route path="/:id" component={Article} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
