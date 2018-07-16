import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import articleItems from './article-items';
import marks from './marks';

export default combineReducers({
    routing: routerReducer,
    articles,
    articleItems,
    marks
})