import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import articles from './articles';
import articleItems from './article-items';
import likes from './likes';

export default combineReducers({
    routing: routerReducer,
    articles,
    articleItems,
    likes
})