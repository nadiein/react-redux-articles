import R from 'ramda';

import {
    ADD_ARTICLE_MARK
} from './../../actionTypes';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_ARTICLE_MARK:
            return R.append(payload, state)
        default:
            return state
    }
} 