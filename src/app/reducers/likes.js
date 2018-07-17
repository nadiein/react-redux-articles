import R from 'ramda';

import {
    ADD_LIKE
} from './../../actionTypes';

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_LIKE:
            return R.append(payload, state)
        default:
            return state
    }
} 