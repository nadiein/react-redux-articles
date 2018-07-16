import R from 'ramda';

import {
    FETCH_ARTICLES_SUCCESS,
    LOAD_MORE_SUCCESS
} from './../../actionTypes';

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ARTICLES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, newValues);

        case LOAD_MORE_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload);
            return R.merge(state, moreValues);

        default:
            return state
    }
}